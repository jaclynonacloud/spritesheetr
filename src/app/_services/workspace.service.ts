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
import { ScaleBehaviour } from '../_managers/_behaviours/ScaleBehaviour';


/**
 * Controls all Workspace related components and actions.  Emits any data that other services will need to run back up to the AppComponent.
 */
@Injectable()
export class WorkspaceService {

  public static ACCEPTED_POWS:number[] = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];

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

  private _lastMouseX:number;
  private _lastMouseY:number;

  private _selectionArea:{left:number, width:number, top:number, height:number};

  //property attributes
  public marqueeThreshold:number = 0.5;
  public moveIncrement:number = 1;
  public snapToSprites:boolean = false;
  public snapThreshold:number = 10;
  public keepInBounds:boolean = false;


  //behaviours
  private _currentBehaviour:IBehaviour;
  private _selectBehaviour:SelectBehaviour;
  private _marqueeBehaviour:MarqueeBehaviour;
  private _moveBehaviour:MoveBehaviour;
  private _scaleBehaviour:ScaleBehaviour;

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
    this._lastMouseX = 0;
    this._lastMouseY = 0;

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
    
    this._spriteComponents = [];
    this._selectedSpriteComponents = []; //temporary, hold sprite names for selection

    this._spriteData = workspace.sprites;

    this._calculateSelectionArea();
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
    this._scaleBehaviour = new ScaleBehaviour(this._workareaComponent.Element);

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
    this._quality = quality;
  }

  public setScale(scale:number):void {
    this._scale = scale;
    console.log("SCALE HAS BEEN SET TO: " + this._scale);
    this._workareaComponent.Scale = scale;
  }
  public offsetScale(scaleMultiplier:number):void {
    this.setScale(this._scale * scaleMultiplier);
  }

  public autosizeWorkarea():void {
    const selection = [...this._selectedSpriteComponents];
    //temp select all sprites
    this.selectAllSprites();
    //set size
    this._workareaComponent.Width = this._selectionArea.left + this._selectionArea.width;
    this._workareaComponent.Height = this._selectionArea.top + this._selectionArea.height;
    //reset the selection
    this._selectedSpriteComponents = selection;
    this._calculateSelectionArea();
  }

  public clearWorkarea():void {
    this.setTitle("");


    while(this._spriteComponents.length > 0) {
      this.removeSprite(this._spriteComponents[0]);
    }
    this._spriteComponents = [];
    this._spriteData = [];
    this._spriteLoadIndex = 0;

    this._workareaComponent.clear();
  }

  public saveWorkspace(saveName:string):void {
    //create a json with save data
    let saveData:IWorkspace = {
      title : this._title,
      width : this._workareaComponent.Width,
      height : this._workareaComponent.Height,
      bgColour : this._workareaComponent.Colour,
      transparent : this._workareaComponent.Transparent,
      sprites : []
    };
    
    saveData.sprites = this._spriteComponents.map(spr => spr.Data);

    //send data to a save dialog
    const saveDataStream = `data:text/json;charset=utf-8, ${ encodeURIComponent(JSON.stringify(saveData))}`;
    let saveDiv:HTMLAnchorElement = document.createElement("a");
    saveDiv.setAttribute("href", saveDataStream);
    saveDiv.setAttribute("download", `${saveName}.sheetr`);
    saveDiv.click();
  }

  public async buildSpritesheet():Promise<HTMLImageElement> {

    return new Promise<HTMLImageElement>((res, rej) => {

      //setup for build
      let bgColour:string = this._workareaComponent.Colour;
      let isTransparent:boolean = this._workareaComponent.Transparent;
      let selection:SpriteComponent[] = [...this._selectedSpriteComponents];

      this._workareaComponent.Element.classList.add("renderable");
      this.deselectAllSprites();

      //remove background
      if(isTransparent) {
        this._workareaComponent.Element.style.background = "transparent";
        this._workareaComponent.Element.classList.remove("transparent");
      }

      //build the canvas
      html2canvas(document.querySelector("#workarea"), {
        backgroundColor: null,
        allowTaint: true
      })
        .then(canvas => {
            // create an image
            let img = document.createElement("img");
            img.src = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            img.alt = "spritesheet preview";
            // if(!isTransparent) img.style.background = bgColour;


            //testing
            // img.style.position = "absolute";
            // img.style.top = "0px";
            // document.body.appendChild(img);

            //reset workarea
            this._workareaComponent.Transparent = isTransparent;
            this._workareaComponent.Colour = bgColour;

            this._workareaComponent.Element.classList.remove("renderable");
            selection.forEach(spr => this.selectSprite(spr));

            res(img);
        });

    });

    
  }

  public packSprites(algorithm:string, allowResize:boolean, fitToSprites:boolean):void {
    //deselect all
    this.deselectAllSprites();

    //pack the sprites into the sheet
    //TODO: add algorithm changes

    //try to fit into sheet
    //hold sprites in case we can't do this
    const oldSprites:{x:number, y:number}[] = this._spriteComponents.map(spr => {
      const res:{x:number, y:number} = {x:spr.X, y:spr.Y};
      return res;
    });


    //pack sprites by weight
    const sprites:SpriteComponent[] = this._spriteComponents.sort((a, b) => (a.Width * a.Height) > (b.Width * b.Height) ? -1 : 1);
    
    console.warn("SORTED");
    sprites.forEach(spr => {
      console.log(spr.Element);
    });


    while(!this._packSprites(sprites, algorithm)) {

      if(allowResize) {
        console.warn("I cannot pack! - Growing workspace to accomodate!");
        //grow the workarea
        const largestWorkarea = Math.max(this._workareaComponent.Width, this._workareaComponent.Height);
        const pow:number = WorkspaceService.ACCEPTED_POWS.filter(p => p > largestWorkarea)[0];
        console.log("POW: " + pow);
        if(pow == undefined) break;

        this._workareaComponent.Width = pow;
        this._workareaComponent.Height = pow;

      }
      else {
        console.warn("COULD NOT PACK SPRITES!");
        this._spriteComponents.forEach((spr, i) => {
          spr.X = oldSprites[i].x;
          spr.Y = oldSprites[i].y;
        });
        break;
      }

      
    }

    //now, autosize
    if(fitToSprites)
      this.autosizeWorkarea();



    

  }

  /**https://stackoverflow.com/questions/35995943/javascript-sort-objects-by-position-left-top */
  private _favourLeftSort(a:SpriteComponent, b:SpriteComponent) {
    return a.X == b.X ? a.Y - b.Y : a.X - b.X;
  }
  private _favourTopSort(a:SpriteComponent, b:SpriteComponent) {
    return a.Y == b.Y ? a.X - b.X : a.Y - b.Y;
  }

  private _packSprites(sprites:SpriteComponent[], algorithm:string):boolean {

    //iterate through sprites
    for(let i = 0; i < sprites.length; i++) {
      const spr:SpriteComponent = sprites[i];
      //set the top sprite
      if(i == 0) {
        spr.X = 0;
        spr.Y = 0;
        continue;
      }


      let foundPlace:boolean = false;
      let bestPos:{x:number, y:number};

      //iterate through past sprites
      // const lastSprites = sprites.filter((sp, ind) => ind < i).sort((a, b) => a.Y > b.Y ? 1 : -1);
      let sortingAlgorithm = this._favourTopSort;
      switch(algorithm) {
        case "left":
          sortingAlgorithm = this._favourLeftSort;
          break;
        case "top":
          sortingAlgorithm = this._favourTopSort;
      }
      
      const lastSprites = sprites.filter((sp, ind) => ind < i).sort(sortingAlgorithm);
      for(let n = 0; n < lastSprites.length; n++) {

        const compSpr = lastSprites[n];

        //test packing
        const tryPack = this._tryToPackSprite(spr, compSpr, lastSprites);

        if(tryPack.canPack) {
          if(bestPos == null) {
            bestPos = tryPack.coords;
            const tryPackDist = Math.sqrt(Math.pow(tryPack.coords.x, 2) + Math.pow(tryPack.coords.y, 2));
          }
          else {
            const tryPackDist = Math.sqrt(Math.pow(tryPack.coords.x, 2) + Math.pow(tryPack.coords.y, 2));
            const bestPosDist = Math.sqrt(Math.pow(bestPos.x, 2) + Math.pow(bestPos.y, 2));

            if(tryPackDist < bestPosDist) bestPos = tryPack.coords;
          }

          foundPlace = true;
        }
      }

      if(!foundPlace) return false;
      else {
        //set to best position
        spr.X = bestPos.x;
        spr.Y = bestPos.y;
      }
    }

    return true;

  }

  private _tryToPackSprite(spr:SpriteComponent, compare:SpriteComponent, compSprites:SpriteComponent[]):{canPack:boolean, coords:{x:number, y:number}} {
    let canPackTopRight:boolean = true;
    let canPackBottomLeft:boolean = true;
    /**The top-right position of the compare sprite. */
    const tRPos = { x:compare.X + compare.Width, y:compare.Y };
    /**The bottom-left position of the compare sprite. */
    const bLPos = { x:compare.X, y:compare.Y + compare.Height };

    //test whether we will stay in bounds if we place next to compare sprite
    if((tRPos.x + spr.Width) > this._workareaComponent.Width) canPackTopRight = false;
    if((bLPos.y + spr.Height) > this._workareaComponent.Height) canPackBottomLeft = false;

    if(canPackTopRight || canPackBottomLeft) {
      //iterate through children and check for overlap
      for(let i = 0; i < compSprites.length; i++) {
        const compSpr:SpriteComponent = compSprites[i];

        const overlapTR = compSpr.isRectOverlap(tRPos.x, tRPos.y, spr.Width, spr.Height);
        const overlapBL = compSpr.isRectOverlap(bLPos.x, bLPos.y, spr.Width, spr.Height);        

        //FIRST, try top right
        if(canPackTopRight && overlapTR) { 
          canPackTopRight = false;
        }
        //NEXT, try bottom left
        if(canPackBottomLeft && overlapBL) { 
          canPackBottomLeft = false; 
        }

        //if we cannot pack this sprite, move on
        if(!canPackTopRight && !canPackBottomLeft) {
          continue;
        }
      }
    }
    
    let canPackHere:boolean = canPackTopRight || canPackBottomLeft;
    let coords:{x:number, y:number} = (canPackTopRight) ? tRPos : bLPos;
    //if both are viable, find the shortest distance to origin
    if(canPackTopRight && canPackBottomLeft) {
      const tRDist = Math.sqrt(Math.pow(tRPos.x, 2) + Math.pow(tRPos.y, 2));
      const bLDist = Math.sqrt(Math.pow(bLPos.x, 2) + Math.pow(bLPos.y, 2));
      coords = (tRDist < bLDist) ? tRPos : bLPos;
    }

    return {canPack:canPackHere, coords};
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
    //remove from components list
    if(this._spriteComponents.includes(spriteComponent))
      this._spriteComponents.splice(this._spriteComponents.indexOf(spriteComponent), 1);
    //remove from selected if there
    if(this._selectedSpriteComponents.includes(spriteComponent))
      this._selectedSpriteComponents.splice(this._selectedSpriteComponents.indexOf(spriteComponent), 1);
    //remove from sprite data
    if(this._spriteData.includes(spriteComponent.Data))
      this._spriteData.splice(this._spriteData.indexOf(spriteComponent.Data), 1);

    //change selection layout
    this._calculateSelectionArea();
  }

  public removeCurrentSprite():void {
    if(this.SelectedSpriteComponent != null)
      this.removeSprite(this.SelectedSpriteComponent);
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

    this._calculateSelectionArea();
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

    this._calculateSelectionArea();
  }

  /**
   * Selects all sprite components.
   */
  public selectAllSprites():void {
    for(let i = this._spriteComponents.length - 1; i >= 0; i--)
      this.selectSprite(this._spriteComponents[i]);
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
        //listen to events
        this._moveBehaviour.onStartMove.subscribe(() => this._onMoveStart());
        this._moveBehaviour.onMove.subscribe((pos) => this._onMove(pos));
        this._moveBehaviour.onEndMove.subscribe(() => this._onMoveEnd());
        break;
      //SCALE
      case tools.Scale:
        this.changeBehaviour(this._scaleBehaviour);
        this.disableAllSprites();
        //listen to events
        this._scaleBehaviour.onPositionChangeStart.subscribe(() => this._onScaleChangeStart());
        this._scaleBehaviour.onPositionChange.subscribe(pos => this._onScaleChange(pos));
        break;
      case tools.Pan:
      case tools.Zoom:
      case tools.Delete:
        this.changeBehaviour(null);
        this.disableAllSprites();
        break;
    }
  }


  private _calculateSelectionArea():void {
    if(this._selectedSpriteComponents.length <= 0) {
      this._workareaComponent.useSelectionContainer(0, 0, 0, 0);
      this._selectionArea = {left:0, width:0, top:0, height:0};
      return;
    }
    if(this._selectedSpriteComponents.length == 1) {
      const sel:SpriteComponent = this._selectedSpriteComponents[0];
      this._selectionArea = {left: sel.X, width:sel.Width, top: sel.Y, height:sel.Height};
      this._workareaComponent.useSelectionContainer(this._selectionArea.left, this._selectionArea.top, this._selectionArea.width, this._selectionArea.height);
      return;
    }

    const sel:SpriteComponent = this._selectedSpriteComponents[0];
    this._selectionArea = {left: sel.X, width:sel.Width, top: sel.Y, height:sel.Height};
    this._selectedSpriteComponents.forEach(spr => {
      //left/right
      this._selectionArea.left = Math.min(spr.X, this._selectionArea.left);
      this._selectionArea.width = Math.max(spr.X + spr.Width, this._selectionArea.width);
      //top/bottom
      this._selectionArea.top = Math.min(spr.Y, this._selectionArea.top);
      this._selectionArea.height = Math.max(spr.Y + spr.Height, this._selectionArea.height);
    });
    this._selectionArea.width -= this._selectionArea.left;
    this._selectionArea.height -= this._selectionArea.top;

    this._workareaComponent.useSelectionContainer(this._selectionArea.left, this._selectionArea.top, this._selectionArea.width, this._selectionArea.height);
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


  private _selectionAreaStart:{x:number, y:number};
  private _onMoveStart():void {
    console.log("MOVING");

    this._lastMouseX = this._workareaComponent.MousePosition.x;
    this._lastMouseY = this._workareaComponent.MousePosition.y;

    this._selectionAreaStart = {x:this._selectionArea.left, y:this._selectionArea.top};
    
    this._selectedSpriteComponents.forEach(spr => {
      spr.setOffset(spr.X - this._selectionArea.left, spr.Y - this._selectionArea.top);
    });
  }
  private _onMove(pos:{x:number, y:number}):void {
    let {x, y} = pos;

    //set move to closest increment || INCREMENTS
    x = (this.moveIncrement >= 2) ? Math.ceil(x / this.moveIncrement) * this.moveIncrement : x;
    y = (this.moveIncrement >= 2) ? Math.ceil(y / this.moveIncrement) * this.moveIncrement : y;

    // console.log(x, y);

    
    this._selectionArea.left = Math.max(this._selectionAreaStart.x + x, 0);
    this._selectionArea.top = Math.max(this._selectionAreaStart.y + y, 0);
    
    
    if(this.keepInBounds) {
      if(this._selectionAreaStart.x + x + this._selectionArea.width > this._workareaComponent.Width) this._selectionArea.left = this._workareaComponent.Width - this._selectionArea.width;
      if(this._selectionAreaStart.y + y + this._selectionArea.height > this._workareaComponent.Height) this._selectionArea.top = this._workareaComponent.Height - this._selectionArea.height;
    }
    
    //if we snap, try it now
    this._tryToSnapSelection(this._workareaComponent.MousePosition.x - this._lastMouseX, this._workareaComponent.MousePosition.y - this._lastMouseY);

    // if(this._selectionArea.left + this._selectionArea.width + x > this._workareaComponent.Width) this._selectionArea.left = this._workareaComponent.Width - this._selectionArea.width;
    // if(this._selectionArea.top + this._selectionArea.height + x > this._workareaComponent.Height) this._selectionArea.top = this._workareaComponent.Height - this._selectionArea.height;

    const sel = this._selectionArea;
    this._workareaComponent.useSelectionContainer(sel.left, sel.top, sel.width, sel.height);

    this._selectedSpriteComponents.forEach(spr => {
      spr.X = this._selectionArea.left;
      spr.Y = this._selectionArea.top;
      // spr.moveWithOffset(this._selectionArea.left + x, this._selectionArea.top + y);
    })


    this._lastMouseX = this._workareaComponent.MousePosition.x;
    this._lastMouseY = this._workareaComponent.MousePosition.y;   
  }
  private _onMoveEnd():void {
    this._selectedSpriteComponents.forEach(spr => spr.clearOffset() );
  }

  private _keepInWorkareaBounds(desiredX:number, desiredY:number, useAllSides:boolean = false):void {


    this._selectedSpriteComponents.forEach((spr:SpriteComponent) => {

      const visibleX = this._edgeSprites.left.computeX(desiredX);
      const visibleRight = this._edgeSprites.right.computeX(desiredX, 1000);
      spr.moveX(visibleX);
      const visibleY = this._edgeSprites.top.computeY(desiredY);
      const visibleBottom = this._edgeSprites.bottom.computeY(desiredY, 700);
      spr.moveY(visibleY);

      // console.log({
      //   x: visibleX,
      //   y:visibleY,
      //   right:visibleRight,
      //   bottom:visibleBottom
      // });
    });


  }



  private _tryToSnapSelection(xVel:number, yVel:number):void {
    if(!this.snapToSprites) return;
    
    //get sprites that are NOT selected to snap to
    const staticSprites:SpriteComponent[] = this._spriteComponents.filter(spr => !this._selectedSpriteComponents.includes(spr));
    if(staticSprites.length <= 0) return;

    //get the snap direction
    //LEFT RIGHT
    // if(xVel < 0) {
    if(true) {
      //try to snap left side to right edge of other components
      const left = this._selectionArea.left;
      const rightEdges:number[] = staticSprites.map(spr => spr.X + spr.Width);
      let closestEdgeIndex:number = this._getClosestElementIndex(left, rightEdges);
      if(Math.abs(rightEdges[closestEdgeIndex] - left) < this.snapThreshold) {
        this._selectionArea.left = rightEdges[closestEdgeIndex];
      }
      //try to snap left side to left edge of other components
      const leftEdges:number[] = staticSprites.map(spr => spr.X);
      closestEdgeIndex = this._getClosestElementIndex(left, leftEdges);
      if(Math.abs(leftEdges[closestEdgeIndex] - left) < this.snapThreshold)
      this._selectionArea.left = leftEdges[closestEdgeIndex];
    }
    // if(xVel > 0) {
    if(true) {
      //try to snap right side to right edge of other components
      const right = this._selectionArea.left + this._selectionArea.width;
      const rightEdges:number[] = staticSprites.map(spr => spr.X + spr.Width);
      let closestEdgeIndex:number = this._getClosestElementIndex(right, rightEdges);
      if(Math.abs(rightEdges[closestEdgeIndex] - right) < this.snapThreshold) {
        this._selectionArea.left = rightEdges[closestEdgeIndex] - this._selectionArea.width;
      }
      //try to snap right side to left edge of other components
      const leftEdges:number[] = staticSprites.map(spr => spr.X);
      closestEdgeIndex = this._getClosestElementIndex(right, leftEdges);
      if(Math.abs(leftEdges[closestEdgeIndex] - right) < this.snapThreshold)
      this._selectionArea.left = leftEdges[closestEdgeIndex] - this._selectionArea.width;
    }
    //UP DOWN
    // if(yVel < 0) {
    if(true) {
      //try to snap top side to top edge of other components
      const top = this._selectionArea.top;
      const topEdges:number[] = staticSprites.map(spr => spr.Y);
      let closestEdgeIndex:number = this._getClosestElementIndex(top, topEdges);
      if(Math.abs(topEdges[closestEdgeIndex] - top) < this.snapThreshold) {
        this._selectionArea.top = topEdges[closestEdgeIndex];
      }
      //try to snap top side to bottom edge of other components
      const bottomEdges:number[] = staticSprites.map(spr => spr.Y + spr.Height);
      closestEdgeIndex = this._getClosestElementIndex(top, bottomEdges);
      if(Math.abs(bottomEdges[closestEdgeIndex] - top) < this.snapThreshold)
      this._selectionArea.top = bottomEdges[closestEdgeIndex];
    }
    // if(yVel > 0) {
    if(true) {
      //try to snap bottom side to top edge of other components
      const top = this._selectionArea.top + this._selectionArea.height;
      const topEdges:number[] = staticSprites.map(spr => spr.Y);
      let closestEdgeIndex:number = this._getClosestElementIndex(top, topEdges);
      if(Math.abs(topEdges[closestEdgeIndex] - top) < this.snapThreshold) {
        this._selectionArea.top = topEdges[closestEdgeIndex] - this._selectionArea.height;
      }
      //try to snap bottom side to bottom edge of other components
      const bottomEdges:number[] = staticSprites.map(spr => spr.Y + spr.Height);
      closestEdgeIndex = this._getClosestElementIndex(top, bottomEdges);
      if(Math.abs(bottomEdges[closestEdgeIndex] - top) < this.snapThreshold)
      this._selectionArea.top = bottomEdges[closestEdgeIndex] - this._selectionArea.height;
    }

  }
  private _getClosestElementIndex(value:number, arr:number[]):number {
    let res = 0;
    arr.forEach((a, i) => {
      if(Math.abs(value - a) < Math.abs(value - arr[res])) res = i;
    });
    return res;
  }




  private _onScaleChangeStart():void {
    this._spriteComponents.forEach(spr => spr.freezePosition());
  }
  private _onScaleChange(pos:{x:number, y:number}):void {
    console.log(pos);
    //scale with the x position
    //also make it waaaaay smaller increments
    const x:number = pos.x * 0.1;
    //to test, do this to all sprites
    this._spriteComponents.forEach(spr => spr.scaleGlobally(spr.Scale + x));
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
  
  public get SpriteComponents():SpriteComponent[] { return this._spriteComponents; }
  public get SelectedSpriteComponents():SpriteComponent[] { return this._selectedSpriteComponents; }
  public get SelectedSpriteComponent():SpriteComponent { return this._selectedSpriteComponents.length == 1 ? this._selectedSpriteComponents[0] : null; }  
  public get SelectedRect():{x:number,y:number,width:number,height:number} { 
    return { x:this._edgeSprites.left.X, 
            y:this._edgeSprites.top.Y, 
            width:this._edgeSprites.right.X + this._edgeSprites.right.Width - this._edgeSprites.left.X, 
            height:this._edgeSprites.bottom.Y + this._edgeSprites.bottom.Height - this._edgeSprites.top.Y
          }; 
  }
}