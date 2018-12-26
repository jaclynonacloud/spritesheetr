import { EventEmitter } from "@angular/core";

export class InputManager {
    private static _keys:string[];
    private static _registeredKeysDict:Array<{ key:string, keys:string[], callback:any }>;

    private _lastKey:string; //hold until key changes
    private static _allowKeyboard:boolean;

    public static onKeyPressed:EventEmitter<string> = new EventEmitter();
    public static onKeyReleased:EventEmitter<string> = new EventEmitter();

    constructor() {

        InputManager._keys = new Array();
        InputManager._registeredKeysDict = new Array();
        InputManager._allowKeyboard = false;

        document.addEventListener("keydown", this._onKeyDown.bind(this));
        document.addEventListener("keyup", this._onKeyUp.bind(this));
    }



    /*------------------------------------------- LIFECYCLE HOOKS ------------------*/
    /*------------------------------------------- METHODS --------------------------*/
    /**Registers a key combination by a given key value, and will hit the callback whenever the key combination is pressed. */
    public static registerKeys(key:string, keysCombination:string[], callback:any):boolean {
        //make sure this key isn't already registered
        if(InputManager._registeredKeysDict.some(k => k.key == key)) return false;

        InputManager._registeredKeysDict.push({key, keys:keysCombination, callback});
        return true;
    }
    /**Unregisters a key combination by its given key name. */
    public static unregisterKeys(key:string) {
        //make sure this key exists
        const index:number = InputManager._registeredKeysDict.findIndex(k => k.key == key);
        if(index == -1) return false;
        InputManager._registeredKeysDict.splice(index, 1);
        return true;
    }
    /**Clears the key combination registry. */
    public static clearRegistry():void {
        InputManager._registeredKeysDict = new Array();
    }

    /**
     * Returns true if an array of keys are currently pressed.
     * @param keys The keys to test.
     */
    public static areKeysPressed(keys:string[]):boolean {
        //if a key is NOT included in this array, return false || if the length of keys is not the same
        return !(keys.some(k => !InputManager.Keys.includes(k.toLowerCase())) || keys.length != InputManager._keys.length);
    }

    /**Resets the keys array. */
    public static reset():void {
        InputManager._keys = new Array();
    }
    /*------------------------------------------- EVENTS ---------------------------*/
    private _onKeyDown(e:KeyboardEvent) {
        if(!InputManager.AllowKeyboard) return;

        const key:string = e.key.toLowerCase();

        if(this._lastKey == key) return;

        //add key to keys list
        if(!InputManager._keys.includes(key))
            InputManager._keys.push(key);

        InputManager.onKeyPressed.emit(key);

        this._lastKey = key;

        // console.warn("KEYS");
        // console.log(InputManager._keys);

        //test registered keys
        InputManager._registeredKeysDict.forEach(k => {
            if(InputManager.areKeysPressed(k.keys)) k.callback();
        });
    }
    private _onKeyUp(e:KeyboardEvent) {
        const key:string = e.key.toLowerCase();

        if(InputManager._keys.includes(key))
            InputManager._keys.splice(InputManager._keys.indexOf(key), 1);

        InputManager.onKeyReleased.emit(key);

        if(this._lastKey == key) this._lastKey = "";
    }
    /*------------------------------------------- OVERRIDES ------------------------*/
    /*------------------------------------------- GETTERS & SETTERS ----------------*/
    public static get Keys():string[] { return InputManager._keys; }
    public static get IsShiftPressed():boolean { return InputManager._keys.includes("shift"); }

    public static get AllowKeyboard():boolean { return InputManager._allowKeyboard; }
    public static set AllowKeyboard(value:boolean) { InputManager._allowKeyboard = value; }
    
}