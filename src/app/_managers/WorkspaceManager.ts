import { WorkareaComponent } from "../_components/workarea/workarea.component";
import { EventEmitter } from "@angular/core";
import { ISprite } from "./LoadManager";

export class WorkspaceManager {
    private _sprites:ISprite[];
    private _workarea:WorkareaComponent;

    private _selectedSprite:ISprite;

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

    public addSprites(sprites:ISprite[]) {
        this._sprites = sprites;
    }

    public selectSprite(sprite:ISprite) {
        this._selectedSprite = sprite;
    }

    public clearWorkarea() {
        this._sprites = [];
    }
    /*------------------------------------------- EVENTS ---------------------------*/
    private _onScale(scale:number):void {
        this.onScale.emit(scale);
    }
    /*------------------------------------------- OVERRIDES ------------------------*/
    /*------------------------------------------- GETTERS & SETTERS ----------------*/
    public get Workarea():WorkareaComponent { return this._workarea; }
    public get Scale():number { return (this._workarea != null) ? this._workarea.Scale : 0; }

    public get Sprites():ISprite[] { return this._sprites; }
    public get SelectedSprite():ISprite { return this._selectedSprite; }


}