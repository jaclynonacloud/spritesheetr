import { Injectable } from '@angular/core';

@Injectable()
export class StatesService {

  private static _currentState:string;

  constructor() { }

  /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
  /*------------------------------------------- METHODS --------------------------*/
  public load():void {
    StatesService._currentState = "";
  }

  public setState(state:string):void {
    if(StatesService._currentState == state) return;

    StatesService._currentState = state;
  }
  /*------------------------------------------- EVENTS ---------------------------*/
  /*------------------------------------------- OVERRIDES ------------------------*/
  /*------------------------------------------- GETTERS & SETTERS ----------------*/
  public static get STATE() { return Object.freeze({
    "Spritesheetr": "spritesheetr",
    "Animatr": "animatr",
    "Clippr": "clippr"
  })};

  public static get CurrentState():string { return StatesService._currentState; }

}
