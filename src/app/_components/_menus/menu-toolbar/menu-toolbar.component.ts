import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../_services/app.service';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements OnInit {

  constructor(private _appService:AppService) { }

  ngOnInit() {
  }

}
