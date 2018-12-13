import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { MenusService } from '../../_services/menus.service';
import { AppService } from '../../_services/app.service';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss']
})
export class WorkareaComponent implements OnInit {

  @ViewChild("workarea", {read:ElementRef}) element:ElementRef;

  private _width:number;
  private _height:number;
  private _scale:number;

  private _colour:string;
  private _transparent:boolean;

  public onScale:EventEmitter<number> = new EventEmitter();

  constructor(private _appService:AppService, private _menusService:MenusService) { 
    this._scale = 1;
  }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
    this._appService.Workspace.addWorkarea(this);
  }
  /*------------------------------------------- METHODS --------------------------*/
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
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
  }

}
