import {gameboard} from "./gameboard.js";



export class player{
    constructor(real){
        this.board = new gameboard(10, 10);
        real = this.real;
    }
}