import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ToggleButtonComponent } from '../../_ui/toggle-button/toggle-button.component';
import { AppService } from '../../../_services/app.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @ViewChild("openDialog", {read:ElementRef}) openDialog:ElementRef;

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
    //pass this menu to menuservice
    this._appService.MenusService.addMenuBar(this);

    //setup options
    //file
    this._fileOptions = [
      { title:"New", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.New), action:this._appService.new.bind(this._appService) },
      { title:"Open", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Open), action:this._appService.open.bind(this._appService) },
      { title:"Save", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Save), action:this._appService.save.bind(this._appService) },
      { title:"_separator", action:null },
      { title:"Export", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Export), action:this._appService.export.bind(this._appService) },
      { title:"<i>Export Unique</i>", action:null }
    ];
    this._fileOptionsProps = this._getOptionProps(this._fileOptions);

    //edit
    this._editOptions = [
      { title:"Undo", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Undo), action:this._appService.undo.bind(this._appService) },
      { title:"Redo", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Redo), action:this._appService.redo.bind(this._appService) },
      { title:"_separator", action:null },
      { title:"Copy", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Copy), action:this._appService.copy.bind(this._appService) },
      { title:"Paste", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Paste), action:this._appService.paste.bind(this._appService) }
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
  public get OpenDialogElement():HTMLInputElement { return this.openDialog.nativeElement as HTMLInputElement; }

}





export interface IOption {
  title:string;
  shortcut?:string;
  action:any;
}