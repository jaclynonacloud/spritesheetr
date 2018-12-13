import { Component, OnInit, Input } from '@angular/core';
import { ListGroupComponent } from '../../_list/list-group/list-group.component';

@Component({
  selector: 'app-list-property-group',
  templateUrl: './list-property-group.component.html',
  styleUrls: ['./list-property-group.component.scss']
})
export class ListPropertyGroupComponent extends ListGroupComponent implements OnInit {

  @Input() itemProperties:{ title:string, property:string };

  constructor() { 
    super();
  }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onClickedPropItem(e:MouseEvent):void {
    const item:HTMLElement = (e.target as HTMLElement).parentElement;

    console.log("CALLED THISSSSS");
    console.log(item);

    if(item != null) {
      const items = Array.from(item.parentElement.children);
      console.log(items);
      
      this._index = items.indexOf(item);
      this.onChanged.emit(this._index);
    }
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/

}
