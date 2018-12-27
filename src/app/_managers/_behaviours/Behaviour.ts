export interface IBehaviour {
    start():void;
    finish():void;
}

/**Returns the distance between two points.*/
export function getDistance(x1:number, y1:number, x2:number, y2:number):number {
    return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
}