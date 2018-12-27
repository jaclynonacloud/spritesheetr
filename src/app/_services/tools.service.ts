import { Injectable, EventEmitter } from '@angular/core';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { MenuToolbarComponent } from '../_components/_menus/menu-toolbar/menu-toolbar.component';

@Injectable()
export class ToolsService {

  private _toolbar:MenuToolbarComponent;
  private static _currentTool:string;

  public onToolChanged:EventEmitter<string> = new EventEmitter();

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public addToolbar(toolbar:MenuToolbarComponent):void {
    this._toolbar = toolbar;
  }

  public load():void {
  }

  public setTool(tool:string):void {
    if(ToolsService._currentTool == tool) return;
    if(this._toolbar == null) return;
    
    if(ToolsService._currentTool != "") {
      const toolEl:HTMLElement = this._toolbar.Element.querySelector(`.${ToolsService._currentTool}`) as HTMLElement;
      if(toolEl != null) toolEl.classList.remove("selected");
    }

    //set the tool element class
    const toolEl:HTMLElement = this._toolbar.Element.querySelector(`.${tool}`) as HTMLElement;
    if(toolEl != null) toolEl.classList.add("selected");

    ToolsService._currentTool = tool;
    console.log("Tool set to : " + tool);
    this.onToolChanged.emit(tool);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  /**Tool constants. */
  public static get TOOL() { return Object.freeze({
    "Select" : "select",
    "Marquee" : "marquee",
    "Move" : "move",
    "Scale" : "scale",
    "Delete" : "delete",
    "Pan" : "pan",
    "Zoom" : "zoom"
  })};


  public get Toolbar():MenuToolbarComponent { return this._toolbar;}

  public static get CurrentTool():string { return ToolsService._currentTool; }
}