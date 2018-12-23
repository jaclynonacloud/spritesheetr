// import { WorkareaComponent } from "../_components/workarea/workarea.component";
// import { EventEmitter } from "@angular/core";
// import { ISprite, SpriteData } from "./LoadManager";
// import { SpriteComponent } from "../_components/sprite/sprite.component";
// import { AppService } from "../_services/app.service";
// import { SpritesService } from "../_services/sprites.service";

// export class WorkspaceManager {
//     private _title:string;
//     private _sprites:ISprite[];
//     private _workarea:WorkareaComponent;

//     private _selectedSprites:SpriteData[] = [];

//     //behaviours
//     private _currentBehaviour:IBehaviour;
//     private _selectBehaviour:SelectBehaviour;
//     private _marqueeBehaviour:MarqueeBehaviour;


//     public onScale:EventEmitter<number> = new EventEmitter();

//     constructor(private _appService:AppService) {

//         //wait for sprite to load and props
//         this._appService.SpritesService.onLoaded.subscribe((spr:SpriteComponent) => {
//             //get index
//             const index:number = this._appService.SpritesService.Sprites.indexOf(spr);
//             //get our template
//             const data:SpriteData = new SpriteData(this._sprites[index]);
//             console.log("GIMME DATA");

//             spr.load(data);

//             spr.setSelectable(true);
//         });

//     }
//     /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
//     /*------------------------------------------- METHODS --------------------------*/
//     public setTitle(title:string):void {
//         this._title = title;
//     }
    
//     public addWorkarea(workarea:WorkareaComponent) {
//         this._workarea = workarea;
//         this._workarea.Width = 200;
//         this._workarea.Height = 200;
//         this._workarea.Colour = "#d1d1d1";
//         this._workarea.Transparent = false;

//         this._workarea.onScale.subscribe(this._onScale.bind(this), err=>console.warn("Error scaling workarea. " + err));

//         //listen to the sprite service events
//         this._appService.SpritesService.onClickedSprite.subscribe(this._onSpriteClicked.bind(this), err => console.warn("Could not handle sprite click! " + err));


//         //wait for workarea first
//         //setup behaviours
//         this._selectBehaviour = new SelectBehaviour(this);
//         this._marqueeBehaviour = new MarqueeBehaviour(this, this._appService.SpritesService);

//         //subscribe to tool change
//         this._appService.ToolsService.onToolChanged.subscribe((tool:string) => this._onToolChanged(tool));


//         //set to default SELECT
//         this._appService.ToolsService.setTool(this._appService.ToolsService.TOOL.Select);

//     }

//     public addSprites(sprites:ISprite[]) {
//         this._sprites = sprites;
//     }

//     public selectSprite(sprite:SpriteComponent):void {
//         //if the list already includes this sprite, remove
//         if(this._selectedSprites.includes(sprite.Data)) this._selectedSprites.splice(this._selectedSprites.indexOf(sprite.Data), 1);
        
//         //add newest selection to top of list
//         this._selectedSprites.unshift(sprite.Data);
//         console.log(this._selectedSprites);
//         console.warn(this._selectedSprites);
//     }

//     public deselectSprite(sprite:SpriteComponent):void {
//         if(this._selectedSprites.indexOf(sprite.Data) != -1)
//             this._selectedSprites.splice(this._selectedSprites.indexOf(sprite.Data), 1);
//     }

//     public deselectSprites():void {
//         this._selectedSprites = [];
//         console.log("DESELECTED ALL SPRITES");
//     }


//     public resizeWorkarea(width:number, height:number):void {
//         this._workarea.Width = width;
//         this._workarea.Height = height;
//     }

//     public clearWorkarea() {
//         this._sprites = [];
//     }
//     /*------------------------------------------- EVENTS ---------------------------*/
//     private _onScale(scale:number):void {
//         this.onScale.emit(scale);
//     }

//     private _onSpriteClicked(sprite:SpriteComponent):void {
//         //CHECK STATE

//         //if we are on select tool, only allow ONE selection UNLESS we are using the SHIFT modifier
//         if(this._appService.ToolsService.CurrentTool == this._appService.ToolsService.TOOL.Select && !this._appService.IsShiftPressed) this.deselectSprites();

//         //select the sprite, if allowed
//         this._appService.SpritesService.select(sprite);
//         // this.selectSprite(this._sprites[this._appService.SpritesService.Sprites.indexOf(sprite)]);
//         this.selectSprite(sprite);

//         //open sprite context
//         this._appService.MenusService.requestContext(this._appService.MenusService.CONTEXT.Sprite);
        
//     }


//     private _onToolChanged(tool:string):void {
//         //change based on given tool
//         const TOOLS = this._appService.ToolsService.TOOL;

//         //finish previous behaviour
//         if(this._currentBehaviour != null) this._currentBehaviour.finish();

//         //handle clickable sprites
//         switch(tool) {
//             case TOOLS.Select:
//                 this._currentBehaviour = this._selectBehaviour;
//                 break;
//             case TOOLS.Marquee:
//                 this._currentBehaviour = this._marqueeBehaviour;
//                 break;
//             case TOOLS.Move:
//             case TOOLS.Scale:
//             case TOOLS.Pan:
//             case TOOLS.Zoom:
//             case TOOLS.Delete:
//         }

//         if(this._currentBehaviour != null) this._currentBehaviour.start();
//     }
//     /*------------------------------------------- OVERRIDES ------------------------*/
//     /*------------------------------------------- GETTERS & SETTERS ----------------*/
//     public get Title():string { return this._title; }
//     public get Workarea():WorkareaComponent { return this._workarea; }
//     public get Scale():number { return (this._workarea != null) ? this._workarea.Scale : 0; }

//     public get Sprites():ISprite[] { return this._sprites; }
//     public get SelectedSprite():SpriteData { return (this._selectedSprites.length > 0) ? this._selectedSprites[0] : null; }
//     public get SelectedSprites():SpriteData[] { return this._selectedSprites; }



// }



// export class SelectBehaviour implements IBehaviour {
//     private _workspace:WorkspaceManager;

//     //events
//     private _onDeselectSprites = () => this._workspace.deselectSprites();

//     constructor(workspace:WorkspaceManager) {
//         this._workspace = workspace
//     }

//     public start():void {
//         //listen to click down
//         // this._workspace.Workarea.Element.addEventListener("mousedown", this._onDeselectSprites);
//     }
//     public finish():void {    
//         //cease listening
//         // this._workspace.Workarea.Element.removeEventListener("mousedown", this._onDeselectSprites);    
//     }
// }





// export class MarqueeBehaviour implements IBehaviour {
//     private _workspace:WorkspaceManager;
//     private _sprites:SpritesService;

//     private _marqueeElement:HTMLElement;

//     private _dragRect:{x:number, y:number, width:number, height:number};
//     private _workareaOffset:{x:number, y:number};

//     //flags
//     private _onDragging:boolean = false;

//     //events
//     private _onMouseStartEvent = (e:MouseEvent) => { this._onMarqueeStart(e) };
//     private _onMouseMoveEvent = (e:MouseEvent) => { this._onMarqueeDrag(e) };
//     private _onMouseEndEvent = (e:MouseEvent) => { this._onMarqueeEnd(e) };

//     constructor(workspace:WorkspaceManager, sprites:SpritesService) {
//         this._workspace = workspace;
//         this._sprites = sprites;
//         this._marqueeElement = this._workspace.Workarea.MarqueeElement;

//         this._workareaOffset = {
//             x: this._workspace.Workarea.Element.offsetLeft,
//             y: this._workspace.Workarea.Element.offsetTop
//         };

//         this._dragRect = { x:0, y: 0, width: 0, height: 0 };
//     }


// /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
// /*------------------------------------------- METHODS --------------------------*/
// public clear(deselect:boolean = true):void {
//     this._marqueeElement.style.left = `0px`;
//     this._marqueeElement.style.top = `0px`;
//     this._marqueeElement.style.width = `0px`;
//     this._marqueeElement.style.height = `0px`;

//     if(this._sprites != null && deselect) this._sprites.deselectAll();
// }
// /*------------------------------------------- EVENTS ---------------------------*/
// private _onMarqueeStart(e:MouseEvent):void {
//     console.log("STARTING DRAG");
//     this._onDragging = true;
//     this.clear();

//     //get offset
//     this._dragRect.x = e.clientX - this._workareaOffset.x;
//     this._dragRect.y = e.clientY - this._workareaOffset.y;

//     this._marqueeElement.style.left = `${this._dragRect.x}px`;
//     this._marqueeElement.style.top = `${this._dragRect.y}px`;


//     //listen to drag and exit events
//     this._workspace.Workarea.Element.addEventListener("mousemove", this._onMouseMoveEvent);
//     this._workspace.Workarea.Element.addEventListener("mouseup", this._onMouseEndEvent);
//     this._workspace.Workarea.Element.addEventListener("mouseleave", this._onMouseEndEvent);
// }

// private _onMarqueeDrag(e:MouseEvent):void {
//     //get size of drag
//     this._dragRect.width = e.clientX - this._workareaOffset.x;
//     this._dragRect.height = e.clientY - this._workareaOffset.y;

//     const { x, y, width, height } = this._dragRect;
//     console.log("SIZE:", x, y, width, height);

//     //control marquee size
//     this._marqueeElement.style.width = `${width - x}px`;
//     this._marqueeElement.style.height = `${height - y}px`;

//     //test whether the given sprite is within the bounds
//     this._sprites.Sprites.forEach((spr:SpriteComponent) => {
//         spr.writeRect();
//         if(spr.isWithinBounds(x, y, width, height)) {
//             spr.select();
//         }
//         else spr.deselect();
//     });
// }

// private _onMarqueeEnd(e:MouseEvent):void {
//     console.log("DONE");
//     this._onDragging = false;

//     //turn off the marquee
//     this.clear(false);

//     this._workspace.Workarea.Element.removeEventListener("mousemove", this._onMouseMoveEvent);
//     this._workspace.Workarea.Element.removeEventListener("mouseup", this._onMouseEndEvent);
//     this._workspace.Workarea.Element.removeEventListener("mouseleave", this._onMouseEndEvent);
// }
// /*------------------------------------------- OVERRIDES ------------------------*/
// public start():void {
//     //listen to click down
//     this._workspace.Workarea.Element.addEventListener("mousedown", this._onMouseStartEvent);
// }
// public finish():void {

//     //cease listening
//     this._workspace.Workarea.Element.removeEventListener("mousedown", this._onMouseStartEvent);
//     this._workspace.Workarea.Element.removeEventListener("mousemove", this._onMouseMoveEvent);
//     this._workspace.Workarea.Element.removeEventListener("mouseup", this._onMouseEndEvent);
//     this._workspace.Workarea.Element.removeEventListener("mouseleave", this._onMouseEndEvent);

// }
// /*------------------------------------------- GETTERS & SETTERS ----------------*/

// }

// export interface IBehaviour {
//     start():void;
//     finish():void;
// }