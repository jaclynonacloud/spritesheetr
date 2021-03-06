import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { WorkspaceService } from '../../_services/workspace.service';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss']
})
export class WorkareaComponent implements OnInit {

  @ViewChild("workarea", {read:ElementRef}) element:ElementRef;
  @ViewChild("marquee", {read:ElementRef}) marqueeElement:ElementRef;
  @ViewChild("selectionContainer", {read:ElementRef}) selectionContainer:ElementRef;

  private _width:number;
  private _height:number;
  private _scale:number;

  private _colour:string;
  private _transparent:boolean;

  private _mousePosition:{x:number, y:number};
  private _selectionRect:{x:number, y:number, width:number, height:number};

  public onScale:EventEmitter<number> = new EventEmitter();

  constructor(private _workspaceService:WorkspaceService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    this._workspaceService.addWorkarea(this);
    //setup initials
    this.clear();

    this.Element.addEventListener("mousemove", (e:MouseEvent) => {this._mousePosition = {x:e.clientX - this.Element.offsetLeft, y:e.clientY - this.Element.offsetTop};});
  }
  /*------------------------------------------- METHODS --------------------------*/
  public useSelectionContainer(x:number, y:number, width:number, height:number):void {
    this._selectionRect = {x, y, width, height};

    this.selectionContainer.nativeElement.style.left = `${x}px`;
    this.selectionContainer.nativeElement.style.top = `${y}px`;
    this.selectionContainer.nativeElement.style.width = `${width}px`;
    this.selectionContainer.nativeElement.style.height = `${height}px`;
  }

  public clear():void {
    this.Width = 512;
    this.Height = 512;
    this.Scale = 1;
    this.Colour = "#DCE3E6";
    this.Transparent = false;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get Element():HTMLElement { return this.element.nativeElement as HTMLElement; }
  public get MarqueeElement():HTMLElement { return this.marqueeElement.nativeElement as HTMLElement; }
  public get SelectionContainer():HTMLElement { return this.selectionContainer.nativeElement as HTMLElement; }
  public get Width():number { return this._width; }
  public get RenderWidth():number { return this._width * this._scale; }
  public set Width(value:number) {
    this._width = value;
    this.element.nativeElement.style.width = `${this._width * this._scale}px`;
  }

  public get Height():number { return this._height; }
  public get RenderHeight():number { return this._height * this._scale; }
  public set Height(value:number) {
    this._height = value;
    this.element.nativeElement.style.height = `${this._height * this._scale}px`;
  }

  public get Colour():string { return this._colour; }
  public set Colour(value:string) {
    this._colour = value;
    this.element.nativeElement.style.background = `${this._colour}`;
  }

  public get Transparent():boolean { return this._transparent; }
  public set Transparent(value:boolean) {
    this._transparent = value;
    if(this._transparent) this.element.nativeElement.classList.add("transparent");
    else this.element.nativeElement.classList.remove("transparent");
  }

  public get Scale():number { return this._scale; }
  public set Scale(value:number) {
    this._scale = value;
    this.Width = this._width;
    this.Height = this._height;

    this.onScale.emit(this._scale);

    this.element.nativeElement.style.transform = `scale(${this._scale})`;
  }


  public get MousePosition() { return this._mousePosition; }

}
