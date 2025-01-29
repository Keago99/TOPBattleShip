import {gameboard} from "./gameboard.js";



export class player{
    constructor(real){
        this.gameboard = new gameboard(10, 10);
        real = this.real;
    }
}