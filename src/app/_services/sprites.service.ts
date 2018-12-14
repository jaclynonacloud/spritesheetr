import { Injectable, EventEmitter } from '@angular/core';
import { SpriteComponent } from '../_components/sprite/sprite.component';
import { MenusService } from './menus.service';

@Injectable()
export class SpritesService {
  private _sprites:SpriteComponent[];
  private _selected:SpriteComponent;

  public onClickedSprite:EventEmitter<SpriteComponent> = new EventEmitter();
  public onLoaded:EventEmitter<SpriteComponent> = new EventEmitter();

  constructor(private _menusService:MenusService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
    public load():void {
      this._sprites = [];
      this._selected = null;
  }

  public addSprite(sprite:SpriteComponent):void {
      this._sprites.push(sprite);

      console.log("SPRITES");
      console.log(this._sprites);

      sprite.setSelectable(true);

      this.onLoaded.emit(sprite);

      // sprite.X = 300;
      // sprite.Y = 150;
  }

  //handle flags
  public select(sprite:SpriteComponent):number {
    if(this._selected != null) {
      this._selected.deselect();
    }

    this._selected = sprite;
    this._selected.select();

    return this._sprites.indexOf(this._selected);
  }

  public disableAll():void {
    this._sprites.forEach(spr => spr.setSelectable(false));
  }
  public enableAll():void {
    this._sprites.forEach(spr => spr.setSelectable(true));
  }

  public deselectAll():void {
    this._sprites.forEach(spr => spr.deselect());
  }
  public selectAll():void {
    this._sprites.forEach(spr => spr.select());
  }

  //handle states
  public onClicked(sprite:SpriteComponent):void {
    console.log("I HAVE LISTENED");
    console.log(sprite);

    this.select(sprite);

    this.onClickedSprite.emit(sprite);

    //open sprite context
    this._menusService.requestContext(this._menusService.CONTEXT.Sprite);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get Sprites():SpriteComponent[] { return this._sprites; }

}
