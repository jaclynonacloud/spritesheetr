import { Injectable, HostListener } from '@angular/core';
import { SpritesService } from './sprites.service';
import { MenusService } from './menus.service';
import { StatesService } from './states.service';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { WorkspaceManager } from '../_managers/WorkspaceManager';

@Injectable()
export class AppService {

  private _keys:string[];

  //create managers
  private _workspaceManager:WorkspaceManager;

  constructor(private _spritesService:SpritesService, private _menusService:MenusService, private _statesService:StatesService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {

    this._keys = [];

    //load services
    this._spritesService.load();
    this._menusService.load();
    this._statesService.load();

    //setup managers
    this._workspaceManager = new WorkspaceManager();


    this._statesService.setState(this._statesService.STATE.Spritesheetr);
    this._menusService.setContext(this._menusService.CONTEXT.Workarea);

    //subscribe to events
    this._menusService.onContextChange.subscribe(this._onContextChange.bind(this), err => console.warn("There was an error changing context. " + err));
    this._workspaceManager.onScale.subscribe(this._onScale.bind(this), err => console.warn("Error scaling workarea. " + err));

    document.addEventListener("keydown", this._onKeyDown.bind(this));
    document.addEventListener("keyup", this._onKeyUp.bind(this));
  }


  private _hasKeysPressed(shortcutKeys:string[]):boolean {
    let hasKeys:boolean = true;
    shortcutKeys.forEach(key => {
      if(this._keys.indexOf(key) == -1) hasKeys = false;
    });
    return hasKeys;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onContextChange(context:string):void {
    //change the menu
    console.log("I AM CALLED? " + context);

    //activate/deactivate workspace
    if(context != this._menusService.CONTEXT.Sprite) this._spritesService.deselectAll();
  }

  private _onScale(scale:number):void {
    //scale sprites
    this._spritesService.Sprites.forEach(spr => spr.callScale(scale));
  }


  private _onKeyDown(e:KeyboardEvent) {
    //don't override F keys
    // if(!e.key.match(/^[f|F]\d$/g)) {
    //   e.preventDefault();
    //   e.stopImmediatePropagation();
    // }
    //add key to the list if it doesn't already exist
    if(!this._keys.includes(e.key)) {
      this._keys.push(e.key);
    }

    

    //test keys
    //listen for key combinations
    if(this._hasKeysPressed(AppService.SHORTCUTS.New)) this.new();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Open)) this.open();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Save)) this.save();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Export)) this.export();
    //
    if(this._hasKeysPressed(AppService.SHORTCUTS.Undo)) this.undo();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Redo)) this.redo();


    return false;
  }
  private _onKeyUp(e:KeyboardEvent) {
    // this._keys = this._keys.splice(this._keys.indexOf(e.key), 1);
    this._keys = this._keys.filter(key => key != e.key);
  }


  // Calls
  public new():void {
    console.log("Create NEW spritesheetr!");
  }

  public open():void {
    console.log("Open spritesheetr file!");
  }

  public save():void {
    console.log("Save spritesheetr file!");
  }

  public export():void {
    console.log("Open export spritesheetr dialog!");
  }

  public undo():void {
    console.log("UNDO!");
  }
  public redo():void {
    console.log("REDO!");
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get SpritesService():SpritesService { return this._spritesService; }
  public get MenusService():MenusService { return this._menusService; }
  public get StatesService():StatesService { return this._statesService; }

  public get Workspace():WorkspaceManager { return this._workspaceManager; }



  // Handle shortcuts
  public static GetShortcut(shortcutKeys:string[]) {
    let keys = [...shortcutKeys];
    //rename longer key names
    keys = keys.map(key => key.replace("Control", "Ctrl").replace("Left Shift", "Shift"));
    return keys.join(" + ");
  }
  public static get SHORTCUTS() { return Object.freeze({
    "New": ["Shift", "N"],
    "Open": ["Shift", "O"],
    "Save": ["Shift", "S"],
    "Export": ["Shift", "E"],

    "Undo": ["Shift", "Z"],
    "Redo": ["Shift", "Y"]
  });}



  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) { 
  //   //this.key = event.key;
  //   console.log(event.key);
  // }

}
