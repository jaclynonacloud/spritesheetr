import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { ListGroupComponent } from '../../_list/list-group/list-group.component';
import { ListPropertyItemComponent } from '../list-property-item/list-property-item.component';

@Component({
  selector: 'app-list-property-group',
  templateUrl: './list-property-group.component.html',
  styleUrls: ['./list-property-group.component.scss']
})
export class ListPropertyGroupComponent extends ListGroupComponent implements OnInit {

  @Input() itemProperties:{ title:string, property:string };

  @ViewChildren(ListPropertyItemComponent) itemComponents : QueryList<ListPropertyItemComponent>;

  constructor() { 
    super();
  }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/

}
