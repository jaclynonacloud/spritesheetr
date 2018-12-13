import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() text:string;
  @Output() onClicked:EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  protected _getText():string {
    //interpret the type of list item this is
    if(this.text == "_separator") return "";

    return this.text;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /**Called when user clicks on item. */
  protected _onClicked(e:MouseEvent):void {
    this.onClicked.emit(e);
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/



}
