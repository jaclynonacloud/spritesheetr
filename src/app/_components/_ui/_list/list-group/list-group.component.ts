import { Component, OnInit, Input, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  @Input() customClass:string = "";
  @Input() items:{title:string, callback:any}[];

  @ViewChildren(ListItemComponent) itemComponents : QueryList<ListItemComponent>;

  @Output() onComplete:EventEmitter<void> = new EventEmitter();

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {    
  }
  /*------------------------------------------- METHODS --------------------------*/
  protected _onClicked():void {
    this.onComplete.emit();
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/

}
