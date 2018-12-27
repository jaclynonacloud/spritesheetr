import { Injectable, EventEmitter } from '@angular/core';
import { SpriteComponent } from '../_components/sprite/sprite.component';
import { WorkareaComponent } from '../_components/workarea/workarea.component';
import { ToolsService } from './tools.service';
import { MenusService } from './menus.service';
import { AppService } from './app.service';
import { InputManager } from '../_managers/InputManager';
//behaviours
import { IBehaviour } from '../_managers/_behaviours/Behaviour';
import { MarqueeBehaviour } from '../_managers/_behaviours/MarqueeBehaviour';
import { MoveBehaviour } from '../_managers/_behaviours/MoveBehaviour';
import { SelectBehaviour } from '../_managers/_behaviours/SelectBehaviour';
import { ISprite, IWorkspace } from '../_managers/LoadManager';


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
  private _edgeSprites:{left:SpriteComponent, right:SpriteComponent, top:SpriteComponent, bottom:SpriteComponent};
  private _selectedTopLeft:SpriteComponent;
  private _spriteData:ISprite[];
  private _spriteLoadIndex:number;

  //property attributes
  public marqueeThreshold:number = 0.5;
  public moveIncrement:number = 1;
  public snapToSprites:boolean;
  public snapThreshold:number = 10;


  //behaviours
  private _currentBehaviour:IBehaviour;
  private _selectBehaviour:SelectBehaviour;
  private _marqueeBehaviour:MarqueeBehaviour;
  private _moveBehaviour:MoveBehaviour;

  public onRequestContext:EventEmitter<string> = new EventEmitter();
  public onSetContext:EventEmitter<string> = new EventEmitter();

  public onLoaded:EventEmitter<void> = new EventEmitter();

  constructor() { }


  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {
    this._quality = "q--pixelated";
    this._scale = 1;
    
    this._spriteComponents = new Array();
    this._selectedSpriteComponents = new Array();
    this._spriteLoadIndex = 0;

    this._edgeSprites = {left:null, right:null, top:null, bottom:null};
  }

  public loadWorkspace(workspace:IWorkspace):void {
    if(workspace == null) return;

    this._title = workspace.title;
    this._workareaComponent.Width = workspace.width;
    this._workareaComponent.Height = workspace.height;
    this._workareaComponent.Transparent = workspace.transparent || false;
    this._workareaComponent.Colour = workspace.bgColour || "#ffffff";

    this._spriteLoadIndex = 0;
    this._spriteData = workspace.sprites;
  }

  // WORKAREA
  public addWorkarea(workareaComponent:WorkareaComponent):void {
    this._workareaComponent = workareaComponent;


    //setup AFTER workarea is assigned
    //give behaviours their dependants
    this._currentBehaviour = null;
    this._selectBehaviour = new SelectBehaviour(this._workareaComponent.Element);
    this._marqueeBehaviour = new MarqueeBehaviour(this._workareaComponent.Element, this._workareaComponent.MarqueeElement);
    this._moveBehaviour = new MoveBehaviour(this._workareaComponent.Element);

    this.onLoaded.emit();
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
    if(!this._selectedSpriteComponents.includes(spriteComponent))
      this._selectedSpriteComponents.unshift(spriteComponent);

    console.log("SELECT");

    spriteComponent.select();

    this._calculateEdgeSprites();
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


  public lockSpriteMovement():void {

  }



  /*-------- BEHAVIOURS --------*/
  public changeBehaviour(behaviour:IBehaviour):void {
    if(behaviour == null) return;
    if(this._currentBehaviour == behaviour) return;

    if(this._currentBehaviour != null) {
      this._currentBehaviour.finish();
    }

    this._currentBehaviour = behaviour;

    //start new behaviour
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
      case ToolsService.TOOL.Select: {
        const alreadySelected:boolean = this._selectedSpriteComponents.includes(spriteComponent);
        //if this sprite is already selected, don't do anything
        // if(alreadySelected) return;

        //check key modifiers
        console.log("IS SHIFT?: " + InputManager.IsShiftPressed);
        if(InputManager.IsShiftPressed) { 
          if(alreadySelected) this.deselectSprite(spriteComponent);
          else this.selectSprite(spriteComponent); 
        }
        else this.selectSingleSprite(spriteComponent);
        break;
      }

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

    const tools = ToolsService.TOOL;

    switch(tool) {
      //SELECT
      case tools.Select:
        this.changeBehaviour(this._selectBehaviour);
        this.enableAllSprites();
        //listen to events
        this._selectBehaviour.onStartMove.subscribe(() => this._onMoveStart());
        this._selectBehaviour.onMove.subscribe((pos) => this._onMove(pos));
        this._selectBehaviour.onEndMove.subscribe(() => this._onMoveEnd());
        break;
      //MARQUEE
      case tools.Marquee:
      this.changeBehaviour(this._marqueeBehaviour);
        this.disableAllSprites();        
        //listen to events
        this._marqueeBehaviour.onMarqueeChange.subscribe(rect => this._onMarqueeChange(rect));
        break;
      //MOVE
      case tools.Move:
        this.changeBehaviour(this._moveBehaviour);
        this.disableAllSprites();
        //get top left sprite for positional information
        this._calculateEdgeSprites();
        //listen to events
        this._moveBehaviour.onStartMove.subscribe(() => this._onMoveStart());
        this._moveBehaviour.onMove.subscribe((pos) => this._onMove(pos));
        this._moveBehaviour.onEndMove.subscribe(() => this._onMoveEnd());
        break;
      case tools.Scale:
        //get top left sprite for positional information
        this._calculateEdgeSprites();
        break;
      case tools.Pan:
      case tools.Zoom:
      case tools.Delete:
        this.disableAllSprites();
        break;
    }
  }


  private _calculateEdgeSprites():void {
    console.warn("SPRITES SELECTED");
    console.log(this._selectedSpriteComponents);
    if(this._selectedSpriteComponents.length <= 0) return;
    if(this._selectedSpriteComponents.length == 1) {
      this._selectedTopLeft = this._selectedSpriteComponents[0];
      return;
    }

    this._selectedSpriteComponents.forEach((spr:SpriteComponent, i:number) => {
      if(i == 0) this._edgeSprites = {left:spr, right:spr, top:spr, bottom:spr};
      else {
        //left/right
        if(spr.X < this._edgeSprites.left.X) this._edgeSprites.left = spr;
        if((spr.X + spr.Rect.width) >= (this._edgeSprites.right.X + this._edgeSprites.right.Width)) this._edgeSprites.right = spr;
        //top/bottom
        if(spr.Y < this._edgeSprites.top.Y) this._edgeSprites.top = spr;
        if((spr.Y + spr.Rect.height) >= (this._edgeSprites.bottom.Y + this._edgeSprites.bottom.Height)) this._edgeSprites.bottom = spr;
      }
    });

    console.warn("EDGES");
    console.log(this._edgeSprites);


    this._selectedTopLeft = this._selectedSpriteComponents.sort((a, b) => {
      const left:boolean = a.X <= b.X;
      const top:boolean = a.Y <= b.Y;
      return (left && top) ? -1 : (left || top) ? -1 : 1;
    })[0];

    console.log(this._selectedTopLeft.Element);
  }


  // MARQUEE
  private _onMarqueeChange(rect:{x:number, y:number, width:number, height:number}):void {

    //result is a rect
    const {x, y, width, height} = rect;
    // //test whether the given sprite is within the bounds
    this._spriteComponents.forEach((spr:SpriteComponent) => {
        // spr.writeRect();
        if(spr.isWithinBounds(x, y, width, height, this.marqueeThreshold)) {
            this.selectSprite(spr);
        }
        else { 
          //check key modifiers
          this.deselectSprite(spr);
        }
    });


  }
  
  //MOVE
  private _onMoveStart():void {
    console.log("MOVING");

    // if(this._selectedTopLeft == null) this._calculateEdgeSprites();

    console.log(this._selectedSpriteComponents);

    console.log(this._selectedTopLeft);
    
    this._selectedSpriteComponents.forEach(spr => {
      console.log("EL");
      console.log(spr.Element);
      console.log(this._selectedTopLeft.Element);
      if(spr == this._selectedTopLeft) spr.setLastPosition();
      else if(this._selectedTopLeft != null) spr.setLastPositionOffset(-this._selectedTopLeft.X, -this._selectedTopLeft.Y);
    });
  }
  private _onMove(pos:{x:number, y:number}):void {
    let { x, y } = pos;
    //set move to closest increment
    x = (this.moveIncrement >= 2) ? Math.ceil(x / this.moveIncrement) * this.moveIncrement : x;
    y = (this.moveIncrement >= 2) ? Math.ceil(y / this.moveIncrement) * this.moveIncrement : y;

    this._selectedSpriteComponents.forEach((spr:SpriteComponent) => {
      if(spr == this._selectedTopLeft) spr.setMoveOffset(x, y);
      else if(this._selectedTopLeft != null) spr.setMoveOffset(this._selectedTopLeft.X, this._selectedTopLeft.Y);
    });
    
  }
  private _onMoveEnd():void {
    
  }



  //property events
  public onSelectAll():void {
    this._spriteComponents.forEach(spr => this.selectSprite(spr));
  }
  public onDeselectAll():void {
    this._spriteComponents.forEach(spr => this.deselectSprite(spr));
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
  public get SelectedRect():{x:number,y:number,width:number,height:number} { return {x:this._edgeSprites.left.X, y:this._edgeSprites.top.Y, width:this._edgeSprites.right.X + this._edgeSprites.right.Width, height:this._edgeSprites.bottom.Y + this._edgeSprites.bottom.Height}; }
}