// import { Injectable, EventEmitter } from '@angular/core';
// import { SpriteComponent } from '../_components/sprite/sprite.component';
// import { MenusService } from './menus.service';
// import { ToolsService } from './tools.service';

// @Injectable()
// export class SpritesService {
//   private _sprites:SpriteComponent[];
//   private _selected:SpriteComponent;

//   public onClickedSprite:EventEmitter<SpriteComponent> = new EventEmitter();
//   public onLoaded:EventEmitter<SpriteComponent> = new EventEmitter();

//   constructor(private _toolsService:ToolsService, private _menusService:MenusService) { }

//   /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
//   /*------------------------------------------- METHODS --------------------------*/
//   public load():void {
//     this._sprites = [];
//     this._selected = null;

//     this._toolsService.onToolChanged.subscribe((tool:string) => this._onToolChanged(tool));
//   }

//   public addSprite(sprite:SpriteComponent):void {
//       this._sprites.push(sprite);

//       console.log("SPRITES");
//       console.log(this._sprites);

//       sprite.setSelectable(true);

//       this.onLoaded.emit(sprite);

//       // sprite.X = 300;
//       // sprite.Y = 150;
//   }

//   //handle flags
//   public select(sprite:SpriteComponent, deselectPrevious:boolean = true):number {
//     if(this._selected != null && deselectPrevious) {
//       this._selected.deselect();
//     }

//     this._selected = sprite;
//     this._selected.select();

//     return this._sprites.indexOf(this._selected);
//   }

//   public disableAll():void {
//     this._sprites.forEach(spr => spr.setSelectable(false));
//   }
//   public enableAll():void {
//     this._sprites.forEach(spr => spr.setSelectable(true));
//   }

//   public deselectAll():void {
//     this._sprites.forEach(spr => spr.deselect());
//   }
//   public selectAll():void {
//     this._sprites.forEach(spr => spr.select());
//   }


//   public changeQuality(quality:string):void {
//     console.log("CHANGING QUALITY: " + quality);
//     this._sprites.forEach((spr:SpriteComponent) => {
//       // spr.Element.style['image-rendering'] = quality;
//       spr.setQuality(quality);
//     });
//   }

//   //handle states
//   public onClicked(sprite:SpriteComponent):void {
//     console.log("I HAVE LISTENED");
//     console.log(sprite);

//     this.select(sprite);
//     this.onClickedSprite.emit(sprite);

//   }
//   /*------------------------------------------- EVENTS ---------------------------*/
//   private _onToolChanged(tool:string):void {

//     const TOOLS = this._toolsService.TOOL;

//     //handle clickable sprites
//     switch(tool) {
//       case TOOLS.Select:
//       case TOOLS.Delete:
//         this.enableAll();
//         break;
//       case TOOLS.Marquee:
//         this.disableAll();
//         break;
//       case TOOLS.Move:
//       case TOOLS.Scale:
//       case TOOLS.Pan:
//       case TOOLS.Zoom:
//         this.deselectAll();
//         this.disableAll();
//     }

//   }
//   /*------------------------------------------- OVERRIDES ------------------------*/
//   /*------------------------------------------- GETTERS & SETTERS ----------------*/
//   public get Sprites():SpriteComponent[] { return this._sprites; }

// }
