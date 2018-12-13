import { Injectable } from '@angular/core';

@Injectable()
export class StatesService {

  private _currentState:string;

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {
    this._currentState = "";
  }

  public setState(state:string):void {
    if(this._currentState == state) return;

    this._currentState = state;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public get STATE() { return Object.freeze({
    "Spritesheetr": "spritesheetr",
    "Animatr": "animatr",
    "Clippr": "clippr"
  })};

  public get CurrentState():string { return this._currentState; }

}
