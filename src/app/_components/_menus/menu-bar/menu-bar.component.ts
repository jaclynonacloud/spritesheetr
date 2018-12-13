import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToggleButtonComponent } from '../../_ui/toggle-button/toggle-button.component';
import { AppService } from '../../../_services/app.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  //flags
  private _closeMenu:boolean = false;

  private _activeItem:ToggleButtonComponent;

  private _fileOptions:IOption[];
  private _fileOptionsProps:{title:string, property:string}[];
  private _editOptions:IOption[];
  private _editOptionsProps:{title:string, property:string}[];

  constructor(private _appService:AppService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    //setup options
    //file
    this._fileOptions = [
      { title:"New", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.New), action:this._appService.new },
      { title:"Open", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Open), action:this._appService.open },
      { title:"Save", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Save), action:this._appService.save },
      { title:"_separator", action:null },
      { title:"Export", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Export), action:this._appService.export },
      { title:"<i>Export Unique</i>", action:null }
    ];
    this._fileOptionsProps = this._getOptionProps(this._fileOptions);

    //edit
    this._editOptions = [
      { title:"Undo", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Undo), action:this._appService.undo },
      { title:"Redo", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Redo), action:this._appService.redo }
    ];
    this._editOptionsProps = this._getOptionProps(this._editOptions);

  }
  /*------------------------------------------- METHODS --------------------------*/
  private _getOptionProps(options:IOption[]) {
    return options.map(opt => {
      const option = {title:opt.title, property:opt.shortcut};
      return option;
    });
  }
  /**Attempts to call an option via its type and index. */
  private _callOption(type:string, index:number):void {
    //try to call the file option 
    if(index == -1) return;

    switch(type) {
      case "file":
        this._callAction(this._fileOptions[index].action);
        break;
      case "edit":
        this._callAction(this._editOptions[index].action);
    }
  }

  /**Attempts to call a method action. */
  private _callAction(action:any) {
    if(action == null) {
      console.warn("Bad action!  NULL");
      return;
    }

    action();
    // this.onCloseMenu.emit();
    this._closeMenu = true;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/

}





export interface IOption {
  title:string;
  shortcut?:string;
  action:any;
}