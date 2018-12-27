import { EventEmitter } from "@angular/core";
import { IBehaviour } from "./Behaviour";

export class MarqueeBehaviour implements IBehaviour {
    private _workareaElement:HTMLElement;
    private _marqueeElement:HTMLElement;

    private _dragRect:{x:number, y:number, width:number, height:number};
    private _workareaOffset:{x:number, y:number};

    //flags
    private _onDragging:boolean = false;

    //events
    private _onMouseStartEvent = (e:MouseEvent) => { this._onMarqueeStart(e) };
    private _onMouseMoveEvent = (e:MouseEvent) => { this._onMarqueeDrag(e) };
    private _onMouseEndEvent = (e:MouseEvent) => { this._onMarqueeEnd(e) };

    //emitters
    public onMarqueeChange:EventEmitter<{x:number, y:number, width:number, height:number}> = new EventEmitter();

    constructor(workareaElement:HTMLElement, marqueeElement:HTMLElement) {
        this._workareaElement = workareaElement;
        this._marqueeElement = marqueeElement;

        this._workareaOffset = {
            x: this._workareaElement.offsetLeft,
            y: this._workareaElement.offsetTop
        };

        this._dragRect = { x:0, y: 0, width: 0, height: 0 };
    }


/*------------------------------------------- LIFECYCLE HOOKS ------------------*/
/*------------------------------------------- METHODS --------------------------*/
public clear(deselect:boolean = true):void {
    this._marqueeElement.style.left = `0px`;
    this._marqueeElement.style.top = `0px`;
    this._marqueeElement.style.width = `0px`;
    this._marqueeElement.style.height = `0px`;

    // if(this._sprites != null && deselect) this._sprites.deselectAll();
}
/*------------------------------------------- EVENTS ---------------------------*/
private _onMarqueeStart(e:MouseEvent):void {
    if(e.button != 0) return; //needs to be a left click
    console.log("STARTING DRAG");
    this._onDragging = true;
    this.clear();

    //get offset
    this._dragRect.x = e.clientX - this._workareaOffset.x;
    this._dragRect.y = e.clientY - this._workareaOffset.y;

    this._marqueeElement.style.left = `${this._dragRect.x}px`;
    this._marqueeElement.style.top = `${this._dragRect.y}px`;


    //listen to drag and exit events
    this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
    this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
    this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
}

private _onMarqueeDrag(e:MouseEvent):void {
    //get size of drag
    this._dragRect.width = e.clientX - this._workareaOffset.x;
    this._dragRect.height = e.clientY - this._workareaOffset.y;

    const { x, y, width, height } = this._dragRect;
    console.log("SIZE:", x, y, width, height);

    //control marquee size
    this._marqueeElement.style.width = `${width - x}px`;
    this._marqueeElement.style.height = `${height - y}px`;

    //emit change
    this.onMarqueeChange.emit(this._dragRect);

    // //test whether the given sprite is within the bounds
    // this._sprites.Sprites.forEach((spr:SpriteComponent) => {
    //     spr.writeRect();
    //     if(spr.isWithinBounds(x, y, width, height)) {
    //         spr.select();
    //     }
    //     else spr.deselect();
    // });
}

private _onMarqueeEnd(e:MouseEvent):void {
    console.log("DONE");
    this._onDragging = false;

    //emit change
    this.onMarqueeChange.emit(this._dragRect);

    //turn off the marquee
    this.clear(false);
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
    this.onMarqueeChange.observers.forEach(ob => (ob as any).unsubscribe());

}
/*------------------------------------------- GETTERS & SETTERS ----------------*/

}

