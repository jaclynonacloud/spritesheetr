import { EventEmitter } from "@angular/core";

export class LoadManager {

    public onLoaded:EventEmitter<IWorkspace> = new EventEmitter();

    constructor() { }
    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    public load(e:Event) {
        const fileInput:HTMLInputElement = e.target as HTMLInputElement;

        if(fileInput.files.length <= 0) return;
        
        let reader = new FileReader();

        reader.onload = (e:any) => {
            const text:string = e.target.result;
            //get json
            const json:IWorkspace = JSON.parse(text);
            console.log("HERE IS MY JSON");
            console.log(json);
            this.onLoaded.emit(json);
        }

        reader.readAsText(fileInput.files[0]);
    }

    public fetchFile(loc:string):void {
        fetch(loc)
        .then(blob => blob.json())
        .then(data => {
            console.log("HERE IS MY LOC JSON");
            console.log(data);
            this.onLoaded.emit(data);
        });
    }
    /*------------------------------------------- EVENTS ---------------------------*/
    /*------------------------------------------- OVERRIDES ------------------------*/
    /*------------------------------------------- GETTERS & SETTERS ----------------*/
}



// Spritesheetr specific data
export interface IWorkspace {
    title:string;
    width:number;
    height:number;
    transparent?:boolean;
    bgColour?:string;
    sprites:ISprite[];
}


export class SpriteData {
    public defaults:ISprite;
    public data:ISprite;

    //events
    public onChange:EventEmitter<string> = new EventEmitter();

    constructor(data:ISprite) {
        this.data = data;
        this.defaults = data;
    }


    public callChange(property:string = "all"):void {
        this.onChange.emit(property);
    }


    //properties
    //name
    public set Name(value:string) {
        this.data.name = value;
        this.onChange.emit("name");
    }
    public get Name():string { return this.data.name; }
    //x
    public set X(value:number) {
        this.data.x = value;
        this.onChange.emit("x");
        console.log("CHANGED POSITION: " + this.data.x);
    }
    public get X():number { return this.data.x; }
    //y
    public set Y(value:number) {
        this.data.y = value;
        this.onChange.emit("y");
    }
    public get Y():number { return this.data.y; }
    //width
    public set Width(value:number) {
        this.data.width = value;
        this.onChange.emit("width");
    }
    public get Width():number { return this.data.width; }
    //height
    public set Height(value:number) {
        this.data.height = value;
        this.onChange.emit("height");
    }
    public get Height():number { return this.data.height; }

    //scale
    // public set Scale(value:number) {
    //     this.data
    // }

    //src
    public set Src(value:string) { 
        this.data.src = value;
        this.onChange.emit("src");
    }
    public get Src() { return this.data.src; }

    
}

export interface ISprite {
    name:string;
    x:number;
    y:number;
    width:number;
    height:number;
    scale?:number;
    src?:string;  
    pivot?:{x:number, y:number};
}