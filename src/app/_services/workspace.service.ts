import { Injectable, EventEmitter } from '@angular/core';
import { SpriteComponent } from '../_components/sprite/sprite.component';
import { WorkareaComponent } from '../_components/workarea/workarea.component';
import { SelectBehaviour, MarqueeBehaviour, IBehaviour } from '../_managers/BehavioursManager';
import { ISprite } from '../_managers/LoadManager';
import { ToolsService } from './tools.service';
import { MenusService } from './menus.service';


/**
 * Controls all Workspace related components and actions.  Emits any data that other services will need to run back up to the AppComponent.
 */
@Injectable()
export class WorkspaceService {

  private _title:string;

  private _quality:string;
  private _scale:number;

  private _workareaComponent:WorkareaComponent; //controls workarea specific, such as sizing
  private _spriteComponents:SpriteComponent[];
  private _selectedSpriteComponents:SpriteComponent[];
  private _spriteData:ISprite[];
  private _spriteLoadIndex:number;

  private _marqueeThreshold:number = 0.5;

  //behaviours
  private _currentBehaviour:IBehaviour;
  private _selectBehaviour:SelectBehaviour;
  private _marqueeBehaviour:SelectBehaviour;

  public onRequestContext:EventEmitter<string> = new EventEmitter();
  public onSetContext:EventEmitter<string> = new EventEmitter();

  constructor() { }


  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {
    this._quality = "q--pixelated";
    this._scale = 1;
    
    this._spriteComponents = new Array();
    this._selectedSpriteComponents = new Array();
    this._spriteLoadIndex = 0;
  }

  // WORKAREA
  public addWorkarea(workareaComponent:WorkareaComponent):void {
    this._workareaComponent = workareaComponent;


    //setup AFTER workarea is assigned
    //give behaviours their dependants
    this._currentBehaviour = null;
    this._selectBehaviour = new SelectBehaviour();
    this._marqueeBehaviour = new MarqueeBehaviour(this._workareaComponent.Element, this._workareaComponent.MarqueeElement);
  }

  public setTitle(title:string):void {
    this._title = title;
  }

  public resizeWorkarea(width:number, height:number):void {
      this._workareaComponent.Width = width;
      this._workareaComponent.Height = height;
  }

  public setQuality(quality:string):void {
    this._spriteComponents.forEach((spr:SpriteComponent) => spr.setQuality(quality));
  }

  public setScale(scale:number):void {
    this._scale = scale;
    console.log("SCALE HAS BEEN SET TO: " + this._scale);
    this._workareaComponent.Scale = scale;
  }
  public offsetScale(scaleMultiplier:number):void {
    this.setScale(this._scale * scaleMultiplier);
  }

  // SPRITES
  /**
   * Adds a sprite to the service so it can control and listen for events.
   * @param spriteComponent The Sprite Component the workspace will listen to.
   */
  public addSprite(spriteComponent:SpriteComponent):void {
    this._spriteComponents.unshift(spriteComponent);
    //set the data
    const data:ISprite = this._spriteData[this._spriteLoadIndex];
    spriteComponent.load(data);
    this._spriteLoadIndex++;

    console.log("ADDED SPRITE");
    console.log(spriteComponent.Data);

    //set to loaded data
    spriteComponent.X = data.x;
    spriteComponent.Y = data.y;
    spriteComponent.Width = data.width;
    spriteComponent.Height = data.height;

    spriteComponent.setSelectable(true);
  }

  /**
   * Removes a sprite from the service and any events related to it.
   * @param spriteComponent The Sprite Component the workspace will remove.
   */
  public removeSprite(spriteComponent:SpriteComponent):void {
    if(this._spriteComponents.includes(spriteComponent))
      this._spriteComponents.splice(this._spriteComponents.indexOf(spriteComponent), 1);
  }

  /**
   * Selects a sprite component and adds it to the selection array.
   * @param spriteComponent The Sprite Component to select.
   */
  public selectSprite(spriteComponent:SpriteComponent):void {
    this._selectedSpriteComponents.unshift(spriteComponent);

    console.log("SELECT");

    spriteComponent.select();
  }

  /**
   * Selects a single sprite component and adds it to the selection array.
   * @param spriteComponent The Sprite Component to select.
   */
  public selectSingleSprite(spriteComponent:SpriteComponent):void {
    this.deselectAllSprites();

    this.onSetContext.emit(MenusService.CONTEXT.Sprite);
    this.selectSprite(spriteComponent);
  }

  /**
   * Removes the sprite component from the selected array.
   * @param spriteComponent The Sprite Component to deselect.
   */
  public deselectSprite(spriteComponent:SpriteComponent):void {
    if(this._selectedSpriteComponents.includes(spriteComponent))
      this._selectedSpriteComponents.splice(this._selectedSpriteComponents.indexOf(spriteComponent), 1);

    spriteComponent.deselect();
  }

  /**
   * Selects all sprite components.
   */
  public selectAllSprites():void {
    for(let i = this._selectedSpriteComponents.length - 1; i >= 0; i--)
      this.selectSprite(this._selectedSpriteComponents[i]);
  }
  /**
   * Deselects all sprite components.
   */
  public deselectAllSprites():void {
    for(let i = this._selectedSpriteComponents.length - 1; i >= 0; i--)
      this.deselectSprite(this._selectedSpriteComponents[i]);
  }

  public enableSprite(spriteComponent:SpriteComponent):void {
    spriteComponent.setSelectable(true);
  }
  public disableSprite(spriteComponent:SpriteComponent):void {
    spriteComponent.setSelectable(false);
  }
  public enableAllSprites():void {
    this._spriteComponents.forEach(spr => spr.setSelectable(true));
  }
  public disableAllSprites():void {
    this._spriteComponents.forEach(spr => spr.setSelectable(false));
  }



  /*-------- BEHAVIOURS --------*/
  public changeBehaviour(behaviour:IBehaviour):void {
    if(behaviour == null) return;
    if(this._currentBehaviour == behaviour) return;

    if(this._currentBehaviour != null) {
      if(!this._currentBehaviour.onBehaviourChange.observers) this._currentBehaviour.onBehaviourChange.unsubscribe();
      this._currentBehaviour.finish();
    }

    this._currentBehaviour = behaviour;

    //start new behaviour
    //subscribe to the new behaviour
    this._currentBehaviour.onBehaviourChange.subscribe(result => this._onBehaviourChange(result));
    this._currentBehaviour.start();
  }
  
  /*------------------------------------------- EVENTS ---------------------------*/
  /**
   * An event called when a user clicks on a sprite component.
   * @param spriteComponent The Sprite Component that called the event.
   */
  public onSpriteComponentClicked(spriteComponent:SpriteComponent):void {
    
    console.log("CLICKED SPRITE!");

    //handle how behaviours will react to tools
    switch(ToolsService.CurrentTool) {
      case ToolsService.TOOL.Select:
        //check key modifiers
        this.deselectAllSprites();
        this.selectSprite(spriteComponent);

    }

    console.log(this._selectedSpriteComponents);

    this.onRequestContext.emit(MenusService.CONTEXT.Sprite);

  }

  public onClickWorkarea():void {
    this.onRequestContext.emit(MenusService.CONTEXT.Workarea);
  }
  

  

  public onToolChange(tool:string):void {
    //change behaviour of workspace based on tool
    let newBehaviour:IBehaviour = this._currentBehaviour;

    // const tools = this._appService.ToolsService.TOOL;
    const tools = ToolsService.TOOL;

    switch(tool) {
      case tools.Select:
        this.changeBehaviour(this._selectBehaviour);
        this.enableAllSprites();
        break;
      case tools.Marquee:
      this.changeBehaviour(this._marqueeBehaviour);
        this.disableAllSprites();
        break;
      case tools.Move:
      case tools.Scale:
      case tools.Pan:
      case tools.Zoom:
      case tools.Delete:
        break;
    }
  }


  private _onBehaviourChange(result:any):void {
    //handle changes based on tool

    const TOOL = ToolsService.TOOL;

    switch(ToolsService.CurrentTool) {
      /*-------- MARQUEE Logic --------*/
      case TOOL.Marquee:
        console.log("THIS IS MY LOGIC");
        //result is a rect
        const {x, y, width, height} = result;
        // //test whether the given sprite is within the bounds
        this._spriteComponents.forEach((spr:SpriteComponent) => {
            spr.writeRect();
            if(spr.isWithinBounds(x, y, width, height, this._marqueeThreshold)) {
                this.selectSprite(spr);
            }
            else { 
              //check key modifiers
              spr.deselect();
            }
        });
        break;

    }

  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get WorkareaComponent():WorkareaComponent { return this._workareaComponent; }
  public get Title():string { return this._title; }
  public get Quality():string { return this._quality; }
  public get Scale():number { return this._scale; }

  public set SpriteData(spriteData:ISprite[]) { this._spriteData = spriteData; }
  public get SpriteData():ISprite[] { return this._spriteData; }

  public get SelectedSpriteComponents():SpriteComponent[] { return this._selectedSpriteComponents; }
  public get SelectedSpriteComponent():SpriteComponent { return this._selectedSpriteComponents.length == 1 ? this._selectedSpriteComponents[0] : null; }

}
