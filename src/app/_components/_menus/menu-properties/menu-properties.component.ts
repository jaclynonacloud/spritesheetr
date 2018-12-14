import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../../_services/menus.service';
import { AppService } from '../../../_services/app.service';

@Component({
  selector: 'app-menu-properties',
  templateUrl: './menu-properties.component.html',
  styleUrls: ['./menu-properties.component.scss']
})
export class MenuPropertiesComponent implements OnInit {

  private _collapsed:boolean = false;

  constructor(private _appService:AppService) { }

  ngOnInit() {
  }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
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
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/

}