import { Injectable, EventEmitter } from '@angular/core';
import { MenuBarComponent } from '../_components/_menus/menu-bar/menu-bar.component';
import { MenuToolbarComponent } from '../_components/_menus/menu-toolbar/menu-toolbar.component';

@Injectable()
export class ToolsService {

  private _toolbar:MenuToolbarComponent;
  private _currentTool:string;

  public onToolChanged:EventEmitter<string> = new EventEmitter();

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public addToolbar(toolbar:MenuToolbarComponent):void {
    this._toolbar = toolbar;

    this.setTool(this.TOOL.Select);
    //TEST
    // this.setTool(this.TOOL.Zoom);
  }

  public load():void {
    this._currentTool = "";
  }

  public setTool(tool:string):void {
    if(this._currentTool == tool) return;
    
    if(this._currentTool != "") {
      const toolEl:HTMLElement = this._toolbar.Element.querySelector(`.${this._currentTool}`) as HTMLElement;
      if(toolEl != null) toolEl.classList.remove("selected");
    }

    //set the tool element class
    const toolEl:HTMLElement = this._toolbar.Element.querySelector(`.${tool}`) as HTMLElement;
    if(toolEl != null) toolEl.classList.add("selected");

    this._currentTool = tool;
    console.log("Tool set to : " + tool);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  /**Tool constants. */
  public get TOOL() { return Object.freeze({
    "Select" : "select",
    "Marquee" : "marquee",
    "Move" : "move",
    "Scale" : "scale",
    "Delete" : "delete",
    "Pan" : "pan",
    "Zoom" : "zoom"
  })};


  public get Toolbar():MenuToolbarComponent { return this._toolbar;}

  public get CurrentTool():string { return this._currentTool; }
}
