import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() text:string;
  @Input() callback:any;

  @Input() customClass:string;
  
  @Output() onClicked:EventEmitter<void> = new EventEmitter();


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
  protected _onClicked(e:Event):void {

    //try the callback
    if(this.callback != null) {
      this.callback(e);
    }

    this.onClicked.emit();    
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/



}
