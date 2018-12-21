import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SpritesService } from '../../_services/sprites.service';
import { AppService } from '../../_services/app.service';
import { ISprite, SpriteData } from '../../_managers/LoadManager';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {

  //used to gain access to the element
  @ViewChild("element", {read:ElementRef}) _element:ElementRef;
  @ViewChild("image", {read:ElementRef}) _image:ElementRef;

  public _data:SpriteData;

  private _naturalWidth:number;
  private _naturalHeight:number;

  private _quality:string;

  //flags
  private _isSelectable:boolean = false;
  private _isSelected:boolean = false;

  constructor(private _appService:AppService, private _spritesService:SpritesService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    this._quality = "";

    console.log("IMAGE");
    console.log(this._image);

    //add to sprite manager
    this._spritesService.addSprite(this);

    //set natural width/height
    this._image.nativeElement.addEventListener("load", (e) => {
      this._naturalWidth = (this._image.nativeElement as HTMLImageElement).naturalWidth;
      this._naturalHeight = (this._image.nativeElement as HTMLImageElement).naturalHeight;
      console.log(this._naturalWidth, this._naturalHeight);

      this.callScale(1);
    });

    //set init quality
    this.setQuality(this._appService.MenusService.MenuProps.CurrentQualityClass);
  }
  /*------------------------------------------- METHODS --------------------------*/
  public load(data:SpriteData):void {
    this._data = data;

    //listen to change BEFORE calling it
    this._data.onChange.subscribe((prop:string) => this._onContextChange(prop));

    //call this to invoke data frome ISprite data.
    this._data.callChange();
    
  }
  
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

    this.Element.classList.add("selected");
  }
  public deselect():void {
    console.log("DESELECT ME!");
    console.log(this.Element);
    this._isSelected = false;

    this.Element.classList.remove("selected");
  }

  public callScale(scale:number):void {
    //set size
    this._element.nativeElement.style.width = `${this._naturalWidth * scale}px`;
    this._element.nativeElement.style.height = `${this._naturalHeight * scale}px`;
  }

  public setQuality(quality:string):void {
    if(this._quality != "") this.Element.classList.remove(this._quality);

    this._quality = quality;
    this.Element.classList.add(this._quality);
  }

  //tests
  public isWithinBounds(x:number, y:number, width:number, height:number):boolean {
    const rect = this.Rect;

    if(rect.x > x)
      if((rect.x + rect.width) < width)
        if(rect.y > y)
          if((rect.y + rect.height) < height)
            return true;

    return false;
  }

  public writeRect():void {
    const { x, y, width, height } = this.Rect;
    console.log("SPRITE RECT:", x, y, width, height);
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onClicked():void {
    if(!this._isSelectable) return;

    console.log("I AM CLICKED!");
    this._spritesService.onClicked(this);
  }


  private _onContextChange(prop:string):void {
    if(prop == "x" || prop == "all") (this._element.nativeElement.parentElement as HTMLElement).style.left = `${this._data.X}px`;
    if(prop =="y" || prop == "all") (this._element.nativeElement.parentElement as HTMLElement).style.top = `${this._data.Y}px`;
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get Data():SpriteData { return this._data; }
  public get Element():HTMLElement { return this._element.nativeElement as HTMLElement; }
  public get Container():HTMLElement { return this._element.nativeElement.parentElement as HTMLElement; }


  public get X():number { return this._data.X; }
  public get Y():number { return this._data.Y; }

  public get Rect() {
    return {
      x: this.X,
      y: this.Y,
      width: this.Element.getBoundingClientRect().width,
      height: this.Element.getBoundingClientRect().height
    };
  }

}
