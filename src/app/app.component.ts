import { Component, OnInit } from '@angular/core';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _appService:AppService) {}


  ngOnInit() {
    //load service
    this._appService.load();    
    
  }
  
}
