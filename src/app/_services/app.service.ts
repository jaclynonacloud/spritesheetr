import { Injectable, HostListener } from '@angular/core';
import { MenusService } from './menus.service';
import { StatesService } from './states.service';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { LoadManager, IWorkspace, ISprite } from '../_managers/LoadManager';
import { SpriteComponent } from '../_components/sprite/sprite.component';
import { ToolsService } from './tools.service';
import { WorkspaceService } from './workspace.service';

@Injectable()
export class AppService {
  //toggles
  private static _currentTool:string;

  private _keys:string[];
  private _allowShortcuts:boolean;
  private static _isShiftPressed:boolean;

  //create managers
  // private _workspaceManager:WorkspaceManager;
  private _loadManager:LoadManager;

  private _spriteData:ISprite[];

  constructor(private _menusService:MenusService, private _statesService:StatesService, private _toolsService:ToolsService, private _workspaceService:WorkspaceService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {

    this._keys = [];
    this._allowShortcuts = true;
    AppService._isShiftPressed = false;

    //load services
    this._menusService.load();
    this._statesService.load();
    this._toolsService.load();
    this._workspaceService.load();

    //setup managers
    // this._workspaceManager = new WorkspaceManager(this);
    this._loadManager = new LoadManager();

    this._loadManager.fetchFile("/assets/data/projects/example1.sheetr");

    this._statesService.setState(StatesService.STATE.Spritesheetr);
    this._menusService.setContext(MenusService.CONTEXT.Workarea);



    //subscribe to events
    this._menusService.onContextChange.subscribe(this._onContextChange.bind(this), err => console.warn("There was an error changing context. " + err));
    this._menusService.onQualityChange.subscribe(this._onQualityChange.bind(this), err => console.warn("Could not change quality! " + err));
    this._menusService.onScaleChange.subscribe(this._onScaleChange.bind(this), err => console.warn("Could not change quality! " + err));
    this._menusService.onDisableShortcuts.subscribe(this._onDisableShortcuts.bind(this));

    this._menusService.onScaleReset.subscribe(this._onScaleReset.bind(this));

    this._toolsService.onToolChanged.subscribe(this._onToolChanged.bind(this), err => console.log("Could not change tool. " + err));
    this._workspaceService.onRequestContext.subscribe(this._onRequestContext.bind(this));
    this._workspaceService.onSetContext.subscribe(this._onSetContext.bind(this));
    // this._workspaceManager.onScale.subscribe(this._onScale.bind(this), err => console.warn("Error scaling workarea. " + err));
    // this._workspaceService.onScale.subscribe(this._onScale.bind(this), err => console.warn("Error scaling workarea. " + err));
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



  public createSprite(sprite:ISprite):void {
    this._workspaceService.SpriteData.push(sprite);
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
    if(context != MenusService.CONTEXT.Sprite) this._workspaceService.deselectAllSprites();
  }

  private _onQualityChange(quality:string):void {
    //set quality on sprites
    // this._spritesService.changeQuality(quality);
    this._workspaceService.setQuality(quality);
  }

  private _onToolChanged(tool:string):void {
    // AppService._currentTool = tool;
    this._workspaceService.onToolChange(tool);
  }

  private _onRequestContext(context:string):void {
    this._menusService.requestContext(context);
    console.log(MenusService.CurrentContext);
  }
  private _onSetContext(context:string):void {
    this._menusService.setContext(context);
    console.log(MenusService.CurrentContext);
    console.log("SET ME NOW PLEASE: " + MenusService.CurrentContext);
  }

  private _onScaleChange(scale:number):void {
    //scale sprites
    this._workspaceService.offsetScale(scale);
  }
  private _onScaleReset():void {
    this._workspaceService.setScale(1);
  }

  private _onDisableShortcuts(disable:boolean):void {
    this._allowShortcuts = !disable;
  }

  private _onLoadedWorkspace(workspace:IWorkspace):void {

    this._workspaceService.SpriteData = workspace.sprites;

    console.log("MAKE IT WORK!");
    this._workspaceService.setTitle(workspace.name);
    //add the sprites to the sprite manager
    this._workspaceService.resizeWorkarea(workspace.workWidth, workspace.workHeight);
  }


  private _onKeyDown(e:KeyboardEvent) {

    if(!this._allowShortcuts) return;

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
    if(e.key == "Shift") AppService._isShiftPressed = true;

    

    //test keys
    //listen for key combinations
    //single keys
    if(this._hasKeysPressed(AppService.SHORTCUTS.Select)) this._toolsService.setTool(ToolsService.TOOL.Select);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Marquee)) this._toolsService.setTool(ToolsService.TOOL.Marquee);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Move)) this._toolsService.setTool(ToolsService.TOOL.Move);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Scale)) this._toolsService.setTool(ToolsService.TOOL.Scale);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Pan)) this._toolsService.setTool(ToolsService.TOOL.Pan);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Zoom)) this._toolsService.setTool(ToolsService.TOOL.Zoom);
    if(this._hasKeysPressed(AppService.SHORTCUTS.Delete)) this._toolsService.setTool(ToolsService.TOOL.Delete);

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
    if(e.key == "Shift") AppService._isShiftPressed = false;
  }


  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public static get CurrentTool():string { return AppService._currentTool; }

  public get MenusService():MenusService { return this._menusService; }
  public get StatesService():StatesService { return this._statesService; }
  public get ToolsService():ToolsService { return this._toolsService; }
  public get WorkspaceService():WorkspaceService { return this._workspaceService; }

  // public get Workspace():WorkspaceManager { return this._workspaceManager; }

  public static get IsShiftPressed():boolean { return this._isShiftPressed; }

  public get SpriteData():ISprite[] { return this._spriteData; }



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
    "Delete": ["k"],

    "Select All": ["Shift", "A"],
    "Deselect All": ["Shift", "D"],

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
