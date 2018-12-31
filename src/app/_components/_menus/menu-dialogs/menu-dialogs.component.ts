import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../../../_services/app.service';
import { MenusService } from '../../../_services/menus.service';

@Component({
  selector: 'app-menu-dialogs',
  templateUrl: './menu-dialogs.component.html',
  styleUrls: ['./menu-dialogs.component.scss']
})
export class MenuDialogsComponent implements OnInit {

  @ViewChild("packSprite", {read:ElementRef}) packSpriteEl:ElementRef;
  @ViewChild("workspaceProps", {read:ElementRef}) workspacePropsEl:ElementRef;

  private _currentDialog:HTMLElement;

  //get attributes from dialogs
  //--pack sprites
  public packSprites_packingType:string = "default";
  public packSprites_allowResize:boolean = true;
  public packSprites_fitToSprites:boolean = true;
  //--workspace props
  public workProp_title:string;
  public workProp_width:number;
  public workProp_height:number;
  public workProp_colour:string;
  public workProp_transparent:boolean;

  constructor(private _appService:AppService, private _menusService:MenusService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    this._currentDialog = null;

    this.hideAllDialogs();

    this._appService.MenusService.addMenuDialogs(this);
  }
  /*------------------------------------------- METHODS --------------------------*/
  /**Opens a new dialog. */
  public openDialog(type:string):void {
    let newDialog:HTMLElement = null;

    //get the new dialog
    const DIALOG = MenuDialogsComponent.DIALOG;
    switch(type) {
      case DIALOG.PackSprite:
        newDialog = this.PackSpriteElement;
        break;
      case DIALOG.WorkspaceProps:
        newDialog = this.WorkspacePropsElement;
        //set elements
        this.workProp_title = this._appService.WorkspaceService.Title;
        this.workProp_width = this.Workarea.Width;
        this.workProp_height = this.Workarea.Height;
        this.workProp_colour = this.Workarea.Colour;
        this.workProp_transparent = this.Workarea.Transparent;
        break;
    }

    if(this._currentDialog == newDialog) return;

    //hide current dialog if there is one
    if(this._currentDialog != null) this.hideDialog(this._currentDialog);

    this._currentDialog = newDialog;
    this._currentDialog.classList.remove("hide");
  }

  /**Hides a dialog element. */
  public hideDialog(dialogElement:HTMLElement):void {
    dialogElement.classList.add("hide");
    this._currentDialog = null;
  }

  /**Hides all dialog boxes. */
  public hideAllDialogs():void {
    this.hideDialog(this.PackSpriteElement);
    this.hideDialog(this.WorkspacePropsElement);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  public onCloseDialog():void {
    if(this._currentDialog == null) return;
    this.hideDialog(this._currentDialog);
  }

  //custom methods
  public onPackSprites():void {
    console.log("MY SETTINGS");
    // console.log(this.packSprites_allowResize, this.packSprites_packingType);
    //send data out to workspace
    this._appService.WorkspaceService.packSprites(this.packSprites_packingType, this.packSprites_allowResize, this.packSprites_fitToSprites);
    //hide the dialog
    this.hideDialog(this._currentDialog);
  }

  public onChangeWorkspaceProperties():void {
    //set elements
    this._appService.WorkspaceService.setTitle(this.workProp_title);
    this.Workarea.Width = this.workProp_width;
    this.Workarea.Height = this.workProp_height;
    this.Workarea.Colour = this.workProp_colour;
    this.Workarea.Transparent = this.workProp_transparent;
    //hide the dialog
    this.hideDialog(this._currentDialog);
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public static get DIALOG() { return Object.freeze({
    PackSprite : "pack-sprite",
    WorkspaceProps : "workspace-props"
  });}

  public get PackSpriteElement():HTMLElement { return this.packSpriteEl.nativeElement as HTMLElement; }
  public get WorkspacePropsElement():HTMLElement { return this.workspacePropsEl.nativeElement as HTMLElement; }

  public get Workarea() { return this._appService.WorkspaceService.WorkareaComponent; }


}
