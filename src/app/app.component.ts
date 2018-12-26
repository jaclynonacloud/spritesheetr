import { Component, OnInit } from '@angular/core';
import { AppService } from './_services/app.service';
import { InputManager } from './_managers/InputManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _appService:AppService) {}


  ngOnInit() {
    //load manager
    new InputManager(); //static
    //load service
    this._appService.load();    
    

  }
  
}
