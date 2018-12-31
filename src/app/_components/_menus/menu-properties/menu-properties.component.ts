import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenusService } from '../../../_services/menus.service';
import { AppService } from '../../../_services/app.service';
import { IOption } from '../menu-bar/menu-bar.component';
import { ISprite, SpriteData } from '../../../_managers/LoadManager';
import { ToolsService } from '../../../_services/tools.service';
import { WorkspaceService } from '../../../_services/workspace.service';
import { SpriteComponent } from '../../sprite/sprite.component';
import { WorkareaComponent } from '../../workarea/workarea.component';

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

  constructor(private _appService:AppService, private _menusService:MenusService, private _workspaceService:WorkspaceService) { }

  ngOnInit() {

    //setup options
    //quality
    this._qualityOptions = [
      { title:"Auto", callback:{"quality" : "q--auto", "title" : "Auto" } },
      { title:"Crisp Edges", callback:{"quality" : "q--crisp-edges", "title" : "Crisp Edges" } },
      { title:"Pixelated", callback:{"quality" : "q--pixelated", "title" : "Pixelated" } },
      { title:"Optimize Quality", callback:{"quality" : "q--optimize-quality", "title" : "Optimize Quality" } },
    ];


    this._menusService.addMenuProperties(this);

    this.setQuality("q--auto", "Auto");
  }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public setQuality(quality:string, qualityName?:string):void {
    this._currentQuality = qualityName || quality;
    this._currentQualityClass = quality;
    
    //emit to parent
    this._menusService.onQualityChange.emit(quality);
  }
  
  private _toggleCollapse():void {
    this._collapsed = !this._collapsed;
  }

  
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onMenuClicked():void {
    this._menusService.requestClear();
  }

  private _onContextClick():void {
    if(this._collapsed) this._collapsed = false;
  }


  //called by template
  private _onQualityChanged(index:number):void {
    this.setQuality(this._qualityOptions[index].callback.quality, this._qualityOptions[index].callback.title);
  }

  private _onScaleChanged(scaleOffset:number):void {
    this._menusService.onScaleChange.emit(scaleOffset);
  }

  private _onScaleReset():void {
    this._menusService.onScaleReset.emit();
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get CurrentQualityClass():string { return this._currentQualityClass; }
  public get QualityOptions():string[] { return this._qualityOptions.map(opt => opt.title); }


  //shorthands
  public get CurrentTool():string { return ToolsService.CurrentTool; }
  public get CurrentContext():string { return MenusService.CurrentContext; }
  public get TOOL() { return ToolsService.TOOL; }
  public get CONTEXT() { return MenusService.CONTEXT; }

  public get SelectedSprite():SpriteComponent { return this._workspaceService.SelectedSpriteComponent; }
  public get SelectedSpritesCount():number { return this._workspaceService.SelectedSpriteComponents.length; }
  public get Workarea():WorkareaComponent { return this._workspaceService.WorkareaComponent; }

}