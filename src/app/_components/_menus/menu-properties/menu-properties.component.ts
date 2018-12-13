import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../../_services/menus.service';
import { AppService } from '../../../_services/app.service';

@Component({
  selector: 'app-menu-properties',
  templateUrl: './menu-properties.component.html',
  styleUrls: ['./menu-properties.component.scss']
})
export class MenuPropertiesComponent implements OnInit {

  constructor(private _appService:AppService) { }

  ngOnInit() {
  }

}