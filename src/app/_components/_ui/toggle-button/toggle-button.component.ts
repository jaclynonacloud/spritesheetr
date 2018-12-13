import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() text:string = "";
  @Input() isOn:boolean = false;
  @Input() hoverable:boolean = false;
  @Input() disabled:boolean = false;

  @Output() onClicked:EventEmitter<ToggleButtonComponent> = new EventEmitter();
  @Output() onClickedState:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  public untoggle():void {
    this.isOn = false;

    this.onClickedState.emit(this.isOn);
  }

  public disable():void {
    this.disabled = true;
  }
  public enable():void {
    this.disabled = false;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /**Called when button is clicked. */
  private _onClicked():void {
    if(this.hoverable) return;

    this.isOn = !this.isOn;
    this.onClicked.emit(this);

    this.onClickedState.emit(this.isOn);
  }

  private _onMouseOver():void {
    if(!this.hoverable) return;
    
    this.isOn = true;
    this.onClicked.emit(this);

    this.onClickedState.emit(this.isOn);
  }
  private _onMouseOut():void {
    if(!this.hoverable) return;
    
    this.isOn = false;
    this.onClicked.emit(this);

    this.onClickedState.emit(this.isOn);
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/



}
