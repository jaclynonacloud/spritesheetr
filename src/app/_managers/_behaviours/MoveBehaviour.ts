import { EventEmitter } from "@angular/core";
import { IBehaviour } from "./Behaviour";

export class MoveBehaviour implements IBehaviour {
    private _workareaElement:HTMLElement;

    private _initPosition:{x:number, y:number};
    private _dragPosition:{x:number, y:number};
    private _workareaOffset:{x:number, y:number};

    //flags
    private _onDragging:boolean = false;

    //events
    private _onMouseStartEvent = (e:MouseEvent) => { this._onDragStart(e) };
    private _onMouseMoveEvent = (e:MouseEvent) => { this._onDrag(e) };
    private _onMouseEndEvent = (e:MouseEvent) => { this._onDragEnd(e) };

    //emitters
    public onStartMove:EventEmitter<void> = new EventEmitter();
    public onMove:EventEmitter<any> = new EventEmitter();

    constructor(workareaElement:HTMLElement) {
        this._workareaElement = workareaElement;

        this._workareaOffset = {
            x: this._workareaElement.offsetLeft,
            y: this._workareaElement.offsetTop
        };

        this._dragPosition = { x:0, y: 0 };
    }

    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    /*------------------------------------------- EVENTS ---------------------------*/
    private _onDragStart(e:MouseEvent):void {
        console.log("STARTING DRAG");
        this._onDragging = true;
        //set drag to empty
        this._dragPosition = { x:0, y: 0 };
    
        //get offset
        this._dragPosition.x = e.clientX - this._workareaOffset.x;
        this._dragPosition.y = e.clientY - this._workareaOffset.y;

        this._initPosition = {x:this._dragPosition.x, y:this._dragPosition.y};
        //call move start
        this.onStartMove.emit();
    
    
        //listen to drag and exit events
        this._workareaElement.parentElement.addEventListener("mousemove", this._onMouseMoveEvent);
        this._workareaElement.parentElement.addEventListener("mouseup", this._onMouseEndEvent);
        this._workareaElement.parentElement.addEventListener("mouseleave", this._onMouseEndEvent);
    }
    
    private _onDrag(e:MouseEvent):void {
        //get size of drag
        this._dragPosition.x = (e.clientX - this._workareaOffset.x) - this._initPosition.x;
        this._dragPosition.y = (e.clientY - this._workareaOffset.y) - this._initPosition.y;

        // console.log(this._dragPosition);
    
        //emit change
        this.onMove.emit(this._dragPosition);
    }
    
    private _onDragEnd(e:MouseEvent):void {
        console.log("DONE");
        this._onDragging = false;
    
        //emit change
        this.onMove.emit(this._dragPosition);

        //
        // this._workareaElement.blur();
        // this._workareaElement.parentElement.blur();
    
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
        this.onStartMove.observers.forEach(ob => (ob as any).unsubscribe());
        this.onMove.observers.forEach(ob => (ob as any).unsubscribe());

    }
    /*------------------------------------------- GETTERS & SETTERS ----------------*/
}