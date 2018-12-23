import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToggleButtonComponent } from '../../toggle-button/toggle-button.component';

@Component({
  selector: 'app-toggle-list-group',
  templateUrl: './toggle-list-group.component.html',
  styleUrls: ['./toggle-list-group.component.scss']
})
export class ToggleListGroupComponent implements OnInit {

  @Input() text:string;
  @Input() items:{title:string, callback:any}[];

  @Input() hoverable:boolean = true;
  @Input() disabled:boolean = false;

  @Input() customClass:string = "";
  
  @Output() onChanged:EventEmitter<number> = new EventEmitter();
  @Output() onClicked:EventEmitter<{index:number, e:Event}> = new EventEmitter();

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

  protected _onComplete():void {
    this.isOpen = false;
  }

  // Internal
  private _onMouseOver():void {
    if(this.disabled || !this.hoverable) return;

    this.isOpen = true;
  }
  private _onMouseOut():void {
    if(this.disabled || !this.hoverable) return;

    this.isOpen = false;
  }
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/




}
