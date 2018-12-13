import { WorkareaComponent } from "../_components/workarea/workarea.component";
import { EventEmitter } from "@angular/core";

export class WorkspaceManager {
    private _workarea:WorkareaComponent;

    public onScale:EventEmitter<number> = new EventEmitter();

    constructor() { }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    public addWorkarea(workarea:WorkareaComponent) {
        this._workarea = workarea;
        this._workarea.Width = 200;
        this._workarea.Height = 200;
        this._workarea.Colour = "#d1d1d1";
        this._workarea.Transparent = false;

        this._workarea.onScale.subscribe(this._onScale.bind(this), err=>console.warn("Error scaling workarea. " + err));
    }
    /*------------------------------------------- EVENTS ---------------------------*/
    private _onScale(scale:number):void {
        this.onScale.emit(scale);
    }
    /*------------------------------------------- OVERRIDES ------------------------*/
    /*------------------------------------------- GETTERS & SETTERS ----------------*/
    public get Workarea():WorkareaComponent { return this._workarea; }
    public get Scale():number { return (this._workarea != null) ? this._workarea.Scale : 0; }
}