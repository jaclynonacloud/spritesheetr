import { WorkareaComponent } from "../_components/workarea/workarea.component";
import { EventEmitter } from "@angular/core";
import { ISprite } from "./LoadManager";
import { SpriteComponent } from "../_components/sprite/sprite.component";
import { AppService } from "../_services/app.service";

export class WorkspaceManager {
    private _title:string;
    private _sprites:ISprite[];
    private _workarea:WorkareaComponent;

    private _selectedSprite:ISprite;


    public onScale:EventEmitter<number> = new EventEmitter();

    constructor(private _appService:AppService) {}
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    public setTitle(title:string):void {
        this._title = title;
    }
    
    public addWorkarea(workarea:WorkareaComponent) {
        this._workarea = workarea;
        this._workarea.Width = 200;
        this._workarea.Height = 200;
        this._workarea.Colour = "#d1d1d1";
        this._workarea.Transparent = false;

        this._workarea.onScale.subscribe(this._onScale.bind(this), err=>console.warn("Error scaling workarea. " + err));

        //listen to the sprite service events
        this._appService.SpritesService.onClickedSprite.subscribe(this._onSpriteClicked.bind(this), err => console.warn("Could not handle sprite click! " + err));
    }

    public addSprites(sprites:ISprite[]) {
        this._sprites = sprites;
    }

    public selectSprite(sprite:ISprite) {
        this._selectedSprite = sprite;
    }


    public resizeWorkarea(width:number, height:number):void {
        this._workarea.Width = width;
        this._workarea.Height = height;
    }

    public clearWorkarea() {
        this._sprites = [];
    }
    /*------------------------------------------- EVENTS ---------------------------*/
    private _onScale(scale:number):void {
        this.onScale.emit(scale);
    }

    private _onSpriteClicked(sprite:SpriteComponent):void {
        //CHECK STATE
        //select the sprite, if allowed
        this._appService.SpritesService.select(sprite);
        this.selectSprite(this._sprites[this._appService.SpritesService.Sprites.indexOf(sprite)]);

        //open sprite context
        this._appService.MenusService.requestContext(this._appService.MenusService.CONTEXT.Sprite);
        
    }
    /*------------------------------------------- OVERRIDES ------------------------*/
    /*------------------------------------------- GETTERS & SETTERS ----------------*/
    public get Title():string { return this._title; }
    public get Workarea():WorkareaComponent { return this._workarea; }
    public get Scale():number { return (this._workarea != null) ? this._workarea.Scale : 0; }

    public get Sprites():ISprite[] { return this._sprites; }
    public get SelectedSprite():ISprite { return this._selectedSprite; }



}