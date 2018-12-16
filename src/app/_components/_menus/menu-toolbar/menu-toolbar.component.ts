import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../../../_services/app.service';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements OnInit {

  @ViewChild("element", {read:ElementRef}) _element:ElementRef;

  constructor(private _appService:AppService) { }

  ngOnInit() {
    this._appService.ToolsService.addToolbar(this);
  }

  public get Element():HTMLElement { return <HTMLElement>this._element.nativeElement; }

}
