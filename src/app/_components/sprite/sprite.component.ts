import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ISprite, SpriteData } from '../../_managers/LoadManager';
import { WorkspaceService } from '../../_services/workspace.service';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {

  //used to gain access to the element
  @ViewChild("element", {read:ElementRef}) _element:ElementRef;
  @ViewChild("image", {read:ElementRef}) _image:ElementRef;

  public _defaults:ISprite;
  public _data:ISprite;

  private _naturalWidth:number;
  private _naturalHeight:number;

  private _quality:string;
  private _scale:number;
  private _pivot:{x:number, y:number};

  //used for movement
  private _lastPosition:{x:number, y:number};
  private _moveOffset:{x:number, y:number};
  

  //flags
  private _isSelectable:boolean = false;
  private _isSelected:boolean = false;

  constructor(private _workspaceService:WorkspaceService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    this._quality = "";
    this._pivot = {x:0.5, y:0.5};

    this.clearOffset();

    console.log("IMAGE");
    console.log(this._image);
    this._lastPosition = {x:0, y:0};
    this._moveOffset = {x:0, y:0};

    //add to sprite manager
    this._workspaceService.addSprite(this);

    this.Element.draggable = false;
    this._image.nativeElement.draggable = false;

    //set natural width/height
    this._image.nativeElement.addEventListener("load", (e) => {
      this._naturalWidth = (this._image.nativeElement as HTMLImageElement).naturalWidth;
      this._naturalHeight = (this._image.nativeElement as HTMLImageElement).naturalHeight;
      console.log(this._naturalWidth, this._naturalHeight);

      this.callScale(1);
    });

    //set init quality
    this.setQuality(this._workspaceService.Quality);

    // this.scaleGlobally(2);
  }
  /*------------------------------------------- METHODS --------------------------*/
  public load(data:ISprite):void {
    this._data = data;

    //add some required defaults if none available
    this.Scale = (this._data.scale != null) ? this._data.scale : 1;
    this.Pivot = (this._data.pivot != null) ? this._data.pivot : this._pivot;


    this._defaults = data;


    //listen to change BEFORE calling it
    // this._data.onChange.subscribe((prop:string) => this._onContextChange(prop));

    //call this to invoke data frome ISprite data.
    // this._data.callChange();    
  }
  
  public setSelectable(yes:boolean):void {
    this._isSelectable = yes;
    if(yes) this.Element.classList.add("selectable");
    else {
      this.Element.classList.remove("selectable");
      //if they were selected, remove that too
      // this.deselect();
    }
  }

  public select():void {
    this._isSelected = true;

    this.Element.classList.add("selected");
  }
  public deselect():void {
    // console.log("DESELECT ME!");
    // console.log(this.Element);
    this._isSelected = false;

    this.Element.classList.remove("selected");
  }

  public callScale(scale:number):void {
    //set size
    this._element.nativeElement.style.width = `${this._naturalWidth * scale}px`;
    this._element.nativeElement.style.height = `${this._naturalHeight * scale}px`;
  }

  public scale(scale:number):void {
    this._scale = scale;
  }

  public callSize():void {
    //set size
    this._element.nativeElement.style.width = `${this._naturalWidth * this._scale}px`;
    this._element.nativeElement.style.height = `${this._naturalHeight * this._scale}px`;
  }


  public resetPosition():void {
    this._data.x = (this._defaults) ? this._defaults.x : 0;
    this._data.y = (this._defaults) ? this._defaults.y : 0;

    this.X = this._data.x;
    this.Y = this._data.y;
  }

  public resetSize():void {
    this.Width = (this._defaults) ? this._defaults.width : this._naturalWidth;
    this.Height = (this._defaults) ? this._defaults.height : this._naturalHeight;
    this.Scale = (this._defaults) ? this._defaults.scale : 1;
  }

  private _lastScale?:number;
  public scaleGlobally(scale:number):void {
    console.log("GIVEN SCALE", scale);
    if(this._lastScale == null) this._lastScale = scale;

    const lastSize = {width:this.Width, height:this.Height};
    console.log("LAST SIZE", lastSize);
    //first, calcuate the new size
    this.Scale = scale;
    const newSize = {width:this.Element.parentElement.getBoundingClientRect().width, height:this.Element.parentElement.getBoundingClientRect().height};
    console.log("NEW SIZE", newSize);
    const x = newSize.width - lastSize.width;
    const y = newSize.height - lastSize.height;
    console.log("SCALE", x, y);

    this.X = this._freezePosition.x * scale;
    this.Y = this._freezePosition.y * scale;

    // const scaleDiff = (scale - this._lastScale);
    // const pixelX = x * scaleDiff;
    // const pixelY = y * scaleDiff;
    // console.warn("DIFF", scaleDiff);
    // //move position with global impact
    // // this.X *= scaleDiff;
    // // this.Y *= scaleDiff;
    // this.X += (pixelX)
    // this.Y += (pixelY);
    // // this.X += x;
    // // this.Y += y;

    this._lastScale = scale;
  }



  public reset():void {
    //if there is default data on the component, set to defaults
    if(this._defaults != null) {

    }
  }

  public setQuality(quality:string):void {
    if(this._quality != "") this.Element.classList.remove(this._quality);

    this._quality = quality;
    this.Element.classList.add(this._quality);
  }


  public setLastPosition():void {
    this._lastPosition.x = this.X;
    this._lastPosition.y = this.Y;
  }
  // public setLastPositionX():void {
  //   this._lastPosition.x = this.X;
  // }
  // public setLastPostiionY():void {
  //   this._lastPosition.y = this.Y;
  // }
  public setLastPositionOffset(xOffset:number, yOffset:number):void {
    this._lastPosition.x = this.X + xOffset;
    this._lastPosition.y = this.Y + yOffset;
  }

  public setMoveOffset(x:number, y:number):void {
    this.X = this._lastPosition.x + x;
    this.Y = this._lastPosition.y + y;
  }


  private _freezePosition:{x:number, y:number};
  public freezePosition():void {
    this._freezePosition = {x:this.X, y:this.Y};
  }
  public computeX(value:number, allowed?:number):number {
    let diff:number = this._freezePosition.x + value;
    // console.log("X: " + value + ", FREEZE: " + this._freezePosition.x + ", DIFF: " + diff);

    //handle boundaries
    if(diff <= 0) diff = -this._freezePosition.x;
    else if(allowed) {
      if((diff + this.Width) > allowed) diff = allowed - this.Width - this._freezePosition.x;
    }
    else diff -= this._freezePosition.x;
    

    return diff;
  }
  public moveX(value:number):void {
    this.X = this._freezePosition.x + value;
  }
  public computeY(value, allowed?:number):number {
    let diff:number = this._freezePosition.y + value;

    //handle boundaries
    if(diff <= 0) diff = -this._freezePosition.y;
    else if(allowed) {
      if((diff + this.Height) > allowed) diff = allowed - this.Height - this._freezePosition.y;
    }
    else diff -= this._freezePosition.y;
    

    return diff;
  }
  public moveY(value:number):void {
    this.Y = this._freezePosition.y + value;
  }

  public computeRight(value:number, allowed:number):number {
    let diff:number = this._freezePosition.x + this.Width + value;

    console.log("DIFF RIGHT: " + diff);

    //handle boundaries
    if(diff > allowed) diff = allowed - this.Width - this._freezePosition.x;
    else diff -= this._freezePosition.x + this.Width;
    

    return diff;
  }
  // public computeBottom(value:number):number {

  // }


  private _offset:{x:number, y:number};
  public setOffset(x:number, y:number):void {
    this._offset = {x, y};
    console.log("MY OFFSET");
    console.log(this._offset);
  }
  public clearOffset():void {
    this._offset = {x:0, y:0};
  }
  // public moveWithOffset(x:number, y:number):void {
  //   this.X = x + this._offset.x;
  //   this.Y = y + this._offset.y;
  // }

  //tests
  public isWithinBounds(x:number, y:number, width:number, height:number, threshold:number = 0):boolean {
    const rect = this.Rect;
    const tRect = {x: rect.width * threshold, y: rect.height * threshold}; //the threshold rect of allowable overlap in bounds 0-no overlap, 1-full overlap

    if((rect.x + tRect.x) > x)
      if((rect.x + rect.width - tRect.x) < width)
        if((rect.y + tRect.y) > y)
          if((rect.y + rect.height - tRect.y) < height)
            return true;

    return false;
  }


  public isRectOverlap(x:number, y:number, width:number, height:number):boolean {
    const rect = this.Rect;
    // return (x < rect.x && width > rect.width && y < rect.y && height < rect.height);
    // return rect.x < x + width && rect.x + rect.width > x && rect.y < y + height && rect.y + rect.height > y;
    
    if(x < rect.x + rect.width && rect.x < x + width && y < rect.y + rect.height)
      return rect.y < y + height;
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
    this._workspaceService.onSpriteComponentClicked(this);
  }


  // private _onContextChange(prop:string):void {
  //   if(prop == "x" || prop == "all") (this._element.nativeElement.parentElement as HTMLElement).style.left = `${this._data.x}px`;
  //   if(prop =="y" || prop == "all") (this._element.nativeElement.parentElement as HTMLElement).style.top = `${this._data.y}px`;
  // }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get Data():ISprite { return this._data; }
  public get Defaults():ISprite { return this._defaults; }
  public get Element():HTMLElement { return this._element.nativeElement as HTMLElement; }
  public get Container():HTMLElement { return this._element.nativeElement.parentElement as HTMLElement; }

  // public get Rect() {
  //   return {
  //     x: this._data.x,
  //     y: this._data.y,
  //     width: this.Element.getBoundingClientRect().width,
  //     height: this.Element.getBoundingClientRect().height
  //   };
  // }
  public get Rect() {
    return {
      x: this._data.x,
      y: this._data.y,
      width: this._data.width,
      height: this._data.height
    };
  }




  public get Name():string { return this._data.name; }
  public set Name(value:string) { this._data.name = value; }

  public get X():number { return this._data.x; }
  public set X(value:number) {
    this._data.x = Math.max(0, value + this._offset.x); //don't let go less than 0
    //set in template
    (this._element.nativeElement.parentElement as HTMLElement).style.left = `${this._data.x}px`;
  }
  public get Y():number { return this._data.y; }
  public set Y(value:number) {
    this._data.y = Math.max(0, value + this._offset.y); //don't let go less than 0
    //set in template
    (this._element.nativeElement.parentElement as HTMLElement).style.top = `${this._data.y}px`;
  }
  public get Width():number { return this._data.width; }
  public set Width(value:number) {
    this._data.width = value;
    //set in template
    (this._element.nativeElement.parentElement as HTMLElement).style.width = `${this._data.width}px`;
  }
  public get Height():number { return this._data.height; }
  public set Height(value:number) {
    this._data.height = value;
    //set in template
    (this._element.nativeElement.parentElement as HTMLElement).style.height = `${this._data.height}px`;
  }

  public get Scale():number { return this._data.scale; }
  public set Scale(value:number) {
    this._data.scale = value;
    //set in template
    (this._element.nativeElement.parentElement as HTMLElement).style.transform = `scale(${this._data.scale})`;
  }

  public get Pivot():{x:number, y:number} { return this._data.pivot; }
  public set Pivot(value:{x:number, y:number}) {
    this._data.pivot = value;
    //TODO: set in template 
  }


  public get LastPosition() { return this._lastPosition; }

}
