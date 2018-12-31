import { Injectable, EventEmitter } from '@angular/core';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { MenuPropertiesComponent } from '../_components/_menus/menu-properties/menu-properties.component';
import { ToolsService } from './tools.service';
import { MenuDialogsComponent } from '../_components/_menus/menu-dialogs/menu-dialogs.component';

@Injectable()
export class MenusService {

  private _menuBar:MenuBarComponent;
  private _menuProps:MenuPropertiesComponent;
  private _menuDialogs:MenuDialogsComponent;

  private _requestedContexts:string[];
  private static _currentContext:string;
  private _canChangeMenuContext:boolean = true;

  public onContextChange:EventEmitter<string> = new EventEmitter();
  public onQualityChange:EventEmitter<string>  = new EventEmitter();
  public onScaleChange:EventEmitter<number>  = new EventEmitter();
  public onDisableShortcuts:EventEmitter<boolean> = new EventEmitter();

  public onScaleReset:EventEmitter<void> = new EventEmitter();

  constructor(private _toolsService:ToolsService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public addMenuBar(menuBar:MenuBarComponent):void {
    this._menuBar = menuBar;
  }

  public addMenuProperties(menuProps:MenuPropertiesComponent):void {
    this._menuProps = menuProps;
  }

  public addMenuDialogs(menuDialogs:MenuDialogsComponent):void {
    this._menuDialogs = menuDialogs;
  }

  public load():void {
    this._requestedContexts = [];
    MenusService._currentContext = "";

    document.addEventListener("mouseup", this._onClickFinished.bind(this));

    //listen to other services
    this._toolsService.onToolChanged.subscribe((tool:string) => this._onToolChanged(tool));
  }

  /**Immediately sets the context.  Use CONTEXT. */
  public setContext(context:string):void {
    MenusService._currentContext = context;
  }
  /**Requests context change on mouse up event.  Use CONTEXT. */
  public requestContext(context:string):void {
    if(!this._canChangeMenuContext) return;

    this._requestedContexts.push(context);
    console.log("REQUESTING: " + context);
  }
  public requestClear():void {
    this._requestedContexts = [];
  }


  public disableShortcuts(disable:boolean):void {
    this.onDisableShortcuts.emit(disable);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  public onKeyUp(e:KeyboardEvent):void {
    //listen for enter key, and blur target
    if(e.key == "Enter") (e.target as HTMLInputElement).blur();
  }

  public onNumberEvent(e:KeyboardEvent, min:number, max:number):void {
    //force the value to be between min/max
    if(e.key == "Enter") {
      const val = (e.target as HTMLInputElement).value;
      if(parseFloat(val) < min) (e.target as HTMLInputElement).value = min.toString();
      if(parseFloat(val) > max) (e.target as HTMLInputElement).value = max.toString();
      this.onKeyUp(e);
    }
  }


  private _onClickFinished():void {
    if(this._requestedContexts.length <= 0) return;

    console.log("FINISHED CLICK");
    //change the context to the requested context
    //set to the most precedent context
    if(this._requestedContexts.length > 0) {
      const sortedContexts:string[] = this._requestedContexts.sort((a, b) => Object.values(MenusService.CONTEXT).indexOf(a) > Object.values(MenusService.CONTEXT).indexOf(b) ? 1 : -1);
      console.log(sortedContexts);
      MenusService._currentContext = sortedContexts[0];

      this.onContextChange.emit(MenusService._currentContext);
    }

    console.log("SET TO: " + MenusService._currentContext);


    this._requestedContexts = [];
  }


  private _onToolChanged(tool:string):void {
    const TOOLS = ToolsService.TOOL;

    //handle viewable requested contexts
    switch(tool) {
      case TOOLS.Select:
        this._canChangeMenuContext = true;
        break;
      case TOOLS.Marquee:
      case TOOLS.Move:
      case TOOLS.Scale:
      case TOOLS.Pan:
      case TOOLS.Zoom:
      case TOOLS.Delete:
        this._canChangeMenuContext = false;
    }

  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  /**Context constants.  Order by click precedence. */
  public static get CONTEXT() { return Object.freeze({
    "Sprite": "sprite",
    "Workarea": "workarea"
  })};
  public static get CurrentContext():string { return MenusService._currentContext; }


  public get MenuBar():MenuBarComponent { return this._menuBar;}
  public get MenuProps():MenuPropertiesComponent { return this._menuProps; }
  public get MenuDialogs():MenuDialogsComponent { return this._menuDialogs; }

  public get CurrentContextTitle():string { return Object.keys(MenusService.CONTEXT)[Object.values(MenusService.CONTEXT).indexOf(MenusService._currentContext)]; }

}
