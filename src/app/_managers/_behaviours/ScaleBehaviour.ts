import { EventEmitter } from "@angular/core";
import { IBehaviour } from "./Behaviour";

export class ScaleBehaviour implements IBehaviour {
    private _workareaElement:HTMLElement;
    private _marqueeElement:HTMLElement;

    private _lastPosition:{x:number, y:number};

    //flags
    private _onDragging:boolean = false;

    //events
    private _onMouseStartEvent = (e:MouseEvent) => { this._onMouseDown(e) };
    private _onMouseMoveEvent = (e:MouseEvent) => { this._onMouseMove(e) };
    private _onMouseEndEvent = (e:MouseEvent) => { this._onMouseUp(e) };

    //emitters
    public onPositionChangeStart:EventEmitter<void> = new EventEmitter();
    public onPositionChange:EventEmitter<{x:number, y:number}> = new EventEmitter();

    constructor(workareaElement:HTMLElement) {
        this._workareaElement = workareaElement;
        this._lastPosition = {x:0, y:0};
    }


/*------------------------------------------- LIFECYCLE HOOKS ------------------*/
/*------------------------------------------- METHODS --------------------------*/
/*------------------------------------------- EVENTS ---------------------------*/
private _onMouseDown(e:MouseEvent):void {
    if(e.button != 0) return; //needs to be a left click
    console.log("STARTING DRAG");
    this._onDragging = true;

    //get initial position
    this._lastPosition.x = e.clientX;
    this._lastPosition.y = e.clientY;

    this.onPositionChangeStart.emit();


    //listen to drag and exit events
    this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
    this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
    this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
}

private _onMouseMove(e:MouseEvent):void {
    const pos:{x:number, y:number} = {x:e.clientX - this._lastPosition.x, y:e.clientY - this._lastPosition.y};

    //emit change
    this.onPositionChange.emit(pos);

    //set the last position
    this._lastPosition = {x:e.clientX, y:e.clientY};
}

private _onMouseUp(e:MouseEvent):void {
    this._workareaElement.blur();
    this._workareaElement.parentElement.blur();

    this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
    this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
    this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);
}
/*------------------------------------------- OVERRIDES ------------------------*/
public start():void {
    //listen to click down
    this._workareaElement.addEventListener("mousedown", this._onMouseStartEvent);
}
public finish():void {

    //cease listening
    this._workareaElement.removeEventListener("mousedown", this._onMouseStartEvent);
    this._workareaElement.parentElement.removeEventListener("mousemove", this._onMouseMoveEvent);
    this._workareaElement.parentElement.removeEventListener("mouseup", this._onMouseEndEvent);
    this._workareaElement.parentElement.removeEventListener("mouseleave", this._onMouseEndEvent);

    //stop the observers from listening
    this.onPositionChange.observers.forEach(ob => (ob as any).unsubscribe());

}
/*------------------------------------------- GETTERS & SETTERS ----------------*/

}

