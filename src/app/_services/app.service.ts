import { Injectable, HostListener } from '@angular/core';
import { MenusService } from './menus.service';
import { StatesService } from './states.service';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { LoadManager, IWorkspace, ISprite } from '../_managers/LoadManager';
import { SpriteComponent } from '../_components/sprite/sprite.component';
import { ToolsService } from './tools.service';
import { WorkspaceService } from './workspace.service';
import { InputManager } from '../_managers/InputManager';

@Injectable()
export class AppService {
  //toggles
  private static _currentTool:string;

  //create managers
  // private _workspaceManager:WorkspaceManager;
  private _loadManager:LoadManager;

  private _spriteData:ISprite[];

  constructor(private _menusService:MenusService, private _statesService:StatesService, private _toolsService:ToolsService, private _workspaceService:WorkspaceService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {

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


    //register all keys used in application
    InputManager.registerKeys("new", AppService.SHORTCUTS.New, this.new.bind(this));
    InputManager.registerKeys("open", AppService.SHORTCUTS.Open, this.open.bind(this));
    InputManager.registerKeys("save", AppService.SHORTCUTS.Save, this.save.bind(this));
    InputManager.registerKeys("export", AppService.SHORTCUTS.Export, this.export.bind(this));

    console.warn("SETTING KEYS");

    const TOOL = ToolsService.TOOL;
    InputManager.registerKeys("select", AppService.SHORTCUTS.Select, () => this._toolsService.setTool(TOOL.Select));
    InputManager.registerKeys("marquee", AppService.SHORTCUTS.Marquee, () => this._toolsService.setTool(TOOL.Marquee));
    InputManager.registerKeys("move", AppService.SHORTCUTS.Move, () => this._toolsService.setTool(TOOL.Move));
    InputManager.registerKeys("scale", AppService.SHORTCUTS.Scale, () => this._toolsService.setTool(TOOL.Scale));
    InputManager.registerKeys("pan", AppService.SHORTCUTS.Pan, () => this._toolsService.setTool(TOOL.Pan));
    InputManager.registerKeys("zoom", AppService.SHORTCUTS.Zoom, () => this._toolsService.setTool(TOOL.Zoom));
    InputManager.registerKeys("delete", AppService.SHORTCUTS.Delete, () => this._toolsService.setTool(TOOL.Delete));


    InputManager.registerKeys("undo", AppService.SHORTCUTS.Undo, this.undo.bind(this));
    InputManager.registerKeys("redo", AppService.SHORTCUTS.Redo, this.redo.bind(this));
    InputManager.registerKeys("copy", AppService.SHORTCUTS.Copy, this.copy.bind(this));
    InputManager.registerKeys("paste", AppService.SHORTCUTS.Paste, this.paste.bind(this));

    InputManager.AllowKeyboard = true;



    //listen for services to load
    this._workspaceService.onLoaded.subscribe(() => {
      //set default tool
      this._toolsService.setTool(ToolsService.TOOL.Select);
    });
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

    //kill keys
    InputManager.reset();

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
    this._menusService.MenuDialogs.openDialog("save-dialog");
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
    InputManager.AllowKeyboard = !disable;
  }

  private _onLoadedWorkspace(workspace:IWorkspace):void {

    this._workspaceService.loadWorkspace(workspace);

    // this._workspaceService.SpriteData = workspace.sprites;

    // console.log("MAKE IT WORK!");
    // this._workspaceService.setTitle(workspace.name);
    // //add the sprites to the sprite manager
    // this._workspaceService.resizeWorkarea(workspace.workWidth, workspace.workHeight);
  }

  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public static get CurrentTool():string { return AppService._currentTool; }

  public get MenusService():MenusService { return this._menusService; }
  public get StatesService():StatesService { return this._statesService; }
  public get ToolsService():ToolsService { return this._toolsService; }
  public get WorkspaceService():WorkspaceService { return this._workspaceService; }

  // public get Workspace():WorkspaceManager { return this._workspaceManager; }

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

}
