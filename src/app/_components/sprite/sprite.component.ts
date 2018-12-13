import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpritesService } from '../../_services/sprites.service';
import { AppService } from '../../_services/app.service';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {

  //used to gain access to the element
  @ViewChild("element", {read:ElementRef}) _element:ElementRef;
  @ViewChild("image", {read:ElementRef}) _image:ElementRef;

  private _x:number;
  private _y:number;
  private _naturalWidth:number;
  private _naturalHeight:number;

  //flags
  private _isSelectable:boolean = false;
  private _isSelected:boolean = false;

  constructor(private _appService:AppService, private _spritesService:SpritesService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    //add to sprite manager
    this._spritesService.addSprite(this);

    //set natural width/height
    this._image.nativeElement.addEventListener("load", (e) => {
      this._naturalWidth = (this._image.nativeElement as HTMLImageElement).naturalWidth;
      this._naturalHeight = (this._image.nativeElement as HTMLImageElement).naturalHeight;
      console.log(this._naturalWidth, this._naturalHeight);
    });

  }
  /*------------------------------------------- METHODS --------------------------*/
  public setSelectable(yes:boolean):void {
    this._isSelectable = yes;
    if(yes) this.Element.classList.add("selectable");
    else {
      this.Element.classList.remove("selectable");
      //if they were selected, remove that too
      this.deselect();
    }
  }

  public select():void {
    this._isSelected = true;

    if(this._isSelectable) this.Element.classList.add("selected");
  }
  public deselect():void {
    this._isSelected = false;

    if(this._isSelectable) this.Element.classList.remove("selected");
  }

  public callScale(scale:number):void {
    //set size
    this._element.nativeElement.style.width = `${this._naturalWidth * scale}px`;
    this._element.nativeElement.style.height = `${this._naturalHeight * scale}px`;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onClicked():void {
    if(!this._isSelectable) return;

    console.log("I AM CLICKED!");
    this._spritesService.onClicked(this);
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get Element():HTMLElement { return this._element.nativeElement as HTMLElement; }
  public get Container():HTMLElement { return this._element.nativeElement.parentElement as HTMLElement; }

  public set X(value:number) { 
    this._x = value;
    (this._element.nativeElement.parentElement as HTMLElement).style.left = `${this._x}px`;
  }
  public get X():number { return this._x; }
  public set Y(value:number) { 
    this._y = value;
    (this._element.nativeElement.parentElement as HTMLElement).style.top = `${this._y}px`;
  }
  public get Y():number { return this._y; }

}
