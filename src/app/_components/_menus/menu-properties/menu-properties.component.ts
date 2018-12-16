import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenusService } from '../../../_services/menus.service';
import { AppService } from '../../../_services/app.service';
import { IOption } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-menu-properties',
  templateUrl: './menu-properties.component.html',
  styleUrls: ['./menu-properties.component.scss']
})
export class MenuPropertiesComponent implements OnInit {

  private _collapsed:boolean = false;

  //handle quality
  private _qualityOptions:IOption[];
  private _currentQualityClass:string = "q--auto";
  private _currentQuality:string = "<br>";

  public onQualityChange:EventEmitter<string> = new EventEmitter();

  constructor(private _appService:AppService) { }

  ngOnInit() {

    //setup options
    //quality
    this._qualityOptions = [
      { title:"Auto", action:{"quality" : "q--auto", "title" : "Auto" } },
      { title:"Crisp Edges", action:{"quality" : "q--crisp-edges", "title" : "Crisp Edges" } },
      { title:"Pixelated", action:{"quality" : "q--pixelated", "title" : "Pixelated" } },
      { title:"Optimize Quality", action:{"quality" : "q--optimize-quality", "title" : "Optimize Quality" } },
    ];


    this._appService.MenusService.addMenuProperties(this);

    this.setQuality("q--auto", "Auto");
  }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public setQuality(quality:string, qualityName?:string):void {
    this._currentQuality = qualityName || quality;
    this._currentQualityClass = quality;
    
    //emit to parent
    this.onQualityChange.emit(quality);
  }
  
  private _toggleCollapse():void {
    this._collapsed = !this._collapsed;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onMenuClicked():void {
    this._appService.MenusService.requestClear();
  }

  private _onContextClick():void {
    if(this._collapsed) this._collapsed = false;
  }


  //called by template
  private _onQualityChanged(index:number):void {
    this.setQuality(this._qualityOptions[index].action.quality, this._qualityOptions[index].action.title);
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get CurrentQualityClass():string { return this._currentQualityClass; }
  public get QualityOptions():string[] { return this._qualityOptions.map(opt => opt.title); }

}