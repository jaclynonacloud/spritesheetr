import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  @Input() items:string[];
  @Output() onChanged:EventEmitter<number> = new EventEmitter();
  


  protected _index:number;

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onClickedItem(e:MouseEvent):void {
    const item:HTMLElement = (e.target as HTMLElement).parentElement;

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
