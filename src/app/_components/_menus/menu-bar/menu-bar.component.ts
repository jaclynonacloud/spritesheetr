import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ToggleButtonComponent } from '../../_ui/toggle-button/toggle-button.component';
import { AppService } from '../../../_services/app.service';
import { ISprite } from '../../../_managers/LoadManager';
import { StatesService } from '../../../_services/states.service';
import { MenuDialogsComponent } from '../menu-dialogs/menu-dialogs.component';

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
  private _fileOptionsProps:{title:string, property:string, callback:any}[];
  private _editOptions:IOption[];
  private _editOptionsProps:{title:string, property:string, callback:any}[];
  private _workspaceOptions:IOption[];
  private _workspaceOptionsProps:{title:string, property:string, callback:any}[];
  
  private _sprOptions:IOption[];
  private _sprOptionsProps:{title:string, property:string, callback:any}[];

  constructor(private _appService:AppService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    //pass this menu to menuservice
    this._appService.MenusService.addMenuBar(this);

    //setup options
    //file
    this._fileOptions = [
      { title:"New", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.New), callback:this._appService.new.bind(this._appService) },
      { title:"Open", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Open), callback:this._appService.open.bind(this._appService) },
      { title:"Save", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Save), callback:this._appService.save.bind(this._appService) },
      { title:"_separator", callback:null },
      { title:"Export", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Export), callback:this._appService.export.bind(this._appService) },
      { title:"<i>Export Unique</i>", callback:null }
    ];
    this._fileOptionsProps = this._getOptionProps(this._fileOptions);

    //edit
    this._editOptions = [
      { title:"Undo", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Undo), callback:this._appService.undo.bind(this._appService) },
      { title:"Redo", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Redo), callback:this._appService.redo.bind(this._appService) },
      { title:"_separator", callback:null },
      { title:"Copy", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Copy), callback:this._appService.copy.bind(this._appService) },
      { title:"Paste", shortcut:AppService.GetShortcut(AppService.SHORTCUTS.Paste), callback:this._appService.paste.bind(this._appService) }
    ];
    this._editOptionsProps = this._getOptionProps(this._editOptions);

    //workspace
    this._workspaceOptions = [
      { title:"Properties...", callback:() => this._appService.MenusService.MenuDialogs.openDialog(MenuDialogsComponent.DIALOG.WorkspaceProps) },
      { title:"Autosize", callback:() => this._appService.WorkspaceService.autosizeWorkarea() }
    ];
    this._workspaceOptionsProps = this._getOptionProps(this._workspaceOptions);

    //spritesheetr
    this._sprOptions = [
      { title:'Upload Image(s) | file--accept=image/*~multiple=true', callback:this._onLoadSprite.bind(this) },
      { title:'Select All', shortcut:AppService.GetShortcut(AppService.SHORTCUTS["Select All"]), callback:(e) => {console.log("CALLED BACK"); console.log(e)} },
      { title:'Deselect All', shortcut:AppService.GetShortcut(AppService.SHORTCUTS["Deselect All"]), callback:null },
      { title:'_separator', callback:null },
      { title:'Pack Sprites', callback:() => this._appService.MenusService.MenuDialogs.openDialog(this.DIALOG.PackSprite) }
    ];
    this._sprOptionsProps = this._getOptionProps(this._sprOptions);

  }
  /*------------------------------------------- METHODS --------------------------*/
  private _getOptionProps(options:IOption[]) {
    return options.map(opt => {
      const option = {title:opt.title, property:opt.shortcut, callback:opt.callback};
      return option;
    });
  }
  /**Attempts to call an option via its type and index. */
  private _callOption(type:string, index:number):void {
    //try to call the file option 
    if(index == -1) return;

    switch(type) {
      case "file":
        this._callAction(this._fileOptions[index].callback);
        break;
      case "edit":
        this._callAction(this._editOptions[index].callback);
        break;
      case "spr":
        this._callAction(this._sprOptions[index].callback);
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

  private _callCallback(type:string, event:{index:number, e:Event}):void {
    console.log("try callback!");
    console.log(event);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onLoadSprite(e:Event):void {

    
    if(e instanceof MouseEvent) return; //we need file event

    const target = (e.target as any);

    //get event data
    if(target.files.length <= 0) return;

    const files = target.files;

    //read EACH selection
    for(let i = 0; i < files.length; i++) {
      const reader:FileReader = new FileReader();
      const file = files[i];

      //load in image
      reader.onload = e => {

        //load into image element to determine size
        const img:HTMLImageElement = document.createElement("img");
        
        img.onload = ev => {

          // console.log("LOADED");
          // console.log(e.target);
          let data:ISprite = {
            name: file.name,
            src: img.src,
            x: 0,
            y: 0,
            scale: 1,
            width: img.width,
            height: img.height
          };


          console.warn("DATA");
          console.log(data);

          this._appService.createSprite(data);

        }

        img.src = reader.result.toString();


      }

      reader.readAsDataURL(file);

    }
    


    
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get OpenDialogElement():HTMLInputElement { return this.openDialog.nativeElement as HTMLInputElement; }

  public get CurrentState():string { return StatesService.CurrentState; }
  public get STATE() { return StatesService.STATE; }

  public get DIALOG() { return MenuDialogsComponent.DIALOG; }

}





export interface IOption {
  title:string;
  shortcut?:string;
  callback:any;
}