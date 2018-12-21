import { Injectable, HostListener } from '@angular/core';
import { SpritesService } from './sprites.service';
import { MenusService } from './menus.service';
import { StatesService } from './states.service';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { WorkspaceManager } from '../_managers/WorkspaceManager';
import { LoadManager, IWorkspace } from '../_managers/LoadManager';
import { SpriteComponent } from '../_components/sprite/sprite.component';
import { ToolsService } from './tools.service';

@Injectable()
export class AppService {

  private _keys:string[];
  private _isShiftPressed:boolean;

  //create managers
  private _workspaceManager:WorkspaceManager;
  private _loadManager:LoadManager;

  constructor(private _spritesService:SpritesService, private _menusService:MenusService, private _statesService:StatesService, private _toolsService:ToolsService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {

    this._keys = [];
    this._isShiftPressed = false;

    //load services
    this._spritesService.load();
    this._menusService.load();
    this._statesService.load();
    this._toolsService.load();

    //setup managers
    this._workspaceManager = new WorkspaceManager(this);
    this._loadManager = new LoadManager();

    this._loadManager.fetchFile("/assets/data/projects/example1.sheetr");

    this._statesService.setState(this._statesService.STATE.Spritesheetr);
    this._menusService.setContext(this._menusService.CONTEXT.Workarea);

    //subscribe to events
    this._menusService.onContextChange.subscribe(this._onContextChange.bind(this), err => console.warn("There was an error changing context. " + err));
    this._menusService.onQualityChange.subscribe(this._onQualityChange.bind(this), err => console.warn("Could not change quality! " + err));
    this._workspaceManager.onScale.subscribe(this._onScale.bind(this), err => console.warn("Error scaling workarea. " + err));
    this._loadManager.onLoaded.subscribe(this._onLoadedWorkspace.bind(this), err => console.log("Could not load workspace! " + err));

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



  // Calls
  public new():void {
    console.log("Create NEW spritesheetr!");
  }

  public open():void {
    console.log("Open spritesheetr file!");
    this._menusService.MenuBar.OpenDialogElement.click();

    //listen for change
    const fileChange = (e:Event) => {
      console.log("I HAVE CHANGED!");
      this._loadManager.load(e);

      //remove event listener
      this._menusService.MenuBar.OpenDialogElement.removeEventListener("change", fileChange);

      //clear the files
      (e.target as HTMLInputElement).value = "";
    }

    //add event listener
    this._menusService.MenuBar.OpenDialogElement.addEventListener("change", fileChange);
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
  public copy():void {
    console.log("COPY");
  }
  public paste():void {
    console.log("PASTE!");
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onContextChange(context:string):void {
    //change the menu
    console.log("I AM CALLED? " + context);

    //activate/deactivate workspace
    if(context != this._menusService.CONTEXT.Sprite) this._spritesService.deselectAll();
  }

  private _onQualityChange(quality:string):void {
    //set quality on sprites
    this._spritesService.changeQuality(quality);
  }

  private _onScale(scale:number):void {
    //scale sprites
    this._spritesService.Sprites.forEach(spr => spr.callScale(scale));
  }

  private _onLoadedWorkspace(workspace:IWorkspace):void {
    console.log("MAKE IT WORK!");
    this._workspaceManager.setTitle(workspace.name);
    //add the sprites to the sprite manager
    this._workspaceManager.addSprites(workspace.sprites);
    this._workspaceManager.resizeWorkarea(workspace.workWidth, workspace.workHeight);
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

    //modifier keys
    if(e.key == "Shift") this._isShiftPressed = true;

    

    //test keys
    //listen for key combinations
    //single keys
    if(this._hasKeysPressed(AppService.SHORTCUTS.Select)) this._toolsService.setTool(this._toolsService.TOOL.Select);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Marquee)) this._toolsService.setTool(this._toolsService.TOOL.Marquee);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Move)) this._toolsService.setTool(this._toolsService.TOOL.Move);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Scale)) this._toolsService.setTool(this._toolsService.TOOL.Scale);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Pan)) this._toolsService.setTool(this._toolsService.TOOL.Pan);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Zoom)) this._toolsService.setTool(this._toolsService.TOOL.Zoom);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Delete)) this._toolsService.setTool(this._toolsService.TOOL.Delete);

    //multi keys
    if(this._hasKeysPressed(AppService.SHORTCUTS.New)) this.new();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Open)) this.open();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Save)) this.save();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Export)) this.export();
    //
    if(this._hasKeysPressed(AppService.SHORTCUTS.Undo)) this.undo();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Redo)) this.redo();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Copy)) this.copy();
    if(this._hasKeysPressed(AppService.SHORTCUTS.Paste)) this.paste();


    return false;
  }
  private _onKeyUp(e:KeyboardEvent) {
    // this._keys = this._keys.splice(this._keys.indexOf(e.key), 1);
    this._keys = this._keys.filter(key => key != e.key);

    //modifier keys
    if(e.key == "Shift") this._isShiftPressed = false;
  }


  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get SpritesService():SpritesService { return this._spritesService; }
  public get MenusService():MenusService { return this._menusService; }
  public get StatesService():StatesService { return this._statesService; }
  public get ToolsService():ToolsService { return this._toolsService; }

  public get Workspace():WorkspaceManager { return this._workspaceManager; }

  public get IsShiftPressed():boolean { return this._isShiftPressed; }



  // Handle shortcuts
  public static GetShortcut(shortcutKeys:string[]) {
    let keys = [...shortcutKeys];
    //rename longer key names
    keys = keys.map(key => key.toUpperCase().replace("CONTROL", "Ctrl").replace("SHIFT", "Shift"));
    return keys.join(" + ");
  }
  public static get SHORTCUTS() { return Object.freeze({
    "New": ["Shift", "N"],
    "Open": ["Shift", "O"],
    "Save": ["Shift", "S"],
    "Export": ["Shift", "E"],

    "Undo": ["Shift", "Z"],
    "Redo": ["Shift", "Y"],
    "Copy": ["Shift", "C"],
    "Paste": ["Shift", "V"],

    "Select": ["q"],
    "Marquee": ["m"],
    "Move": ["v"],
    "Scale": ["s"],
    "Pan": ["h"],
    "Zoom": ["z"],
    "Delete": ["k"]

  });}

  //for use in templates
  public getShortcut(shortcutKeys:string[]):string {
    return AppService.GetShortcut(shortcutKeys);
  }
  public get shortcuts() { return AppService.SHORTCUTS; }



  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) { 
  //   //this.key = event.key;
  //   console.log(event.key);
  // }

}
