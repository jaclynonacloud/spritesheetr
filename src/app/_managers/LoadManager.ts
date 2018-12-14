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
    name:string;
    workWidth:number;
    workHeigh:number;
    sprites:ISprite[];
}
export interface ISprite {
    name:string;
    x:number;
    y:number;
    width:number;
    height:number;
    src?:string;
}