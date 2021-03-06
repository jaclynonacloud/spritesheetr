import { Component, OnInit } from '@angular/core';
import { AppService } from '../../_services/app.service';
import { WorkspaceService } from '../../_services/workspace.service';
import { MenusService } from '../../_services/menus.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor(private _workspaceService:WorkspaceService, private _menusService:MenusService) { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onWorkareaClicked():void {
    // this._appService.MenusService.requestContext(this._appService.MenusService.CONTEXT.Workarea);
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/

  

}