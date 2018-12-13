import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToggleButtonComponent } from '../../toggle-button/toggle-button.component';

@Component({
  selector: 'app-toggle-list-group',
  templateUrl: './toggle-list-group.component.html',
  styleUrls: ['./toggle-list-group.component.scss']
})
export class ToggleListGroupComponent implements OnInit {

  @Input() text:string;
  @Input() items:string[];

  @Input() hoverable:boolean = false;
  @Input() disabled:boolean = false;
  
  @Output() onChanged:EventEmitter<number> = new EventEmitter();

  public isOpen:boolean = false;

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  ngOnInit() {
  }
  /*------------------------------------------- METHODS --------------------------*/
  public disable():void {
    this.disabled = true;
    this.isOpen = false; //snap closed
  }
  public enable():void {
    this.disabled = false;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  private _onToggleButtonClicked(button:ToggleButtonComponent) {
    this.isOpen = !this.isOpen;
  }

  private _onChanged(index:number):void {
    console.log("DID I GET AN INDEX? " + index);
    this.onChanged.emit(index);
    this.isOpen = false;
  }

  // Internal
  private _onMouseOver():void {
    if(this.disabled) return;

    this.isOpen = true;
  }
  private _onMouseOut():void {
    if(this.disabled) return;

    this.isOpen = false;
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/




}
