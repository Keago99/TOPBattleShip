import { ship } from "./ship.js";


export class gameboard{
    constructor(width = 10, height =10){
        this.width = width;
        this.height = height;
        // Learning map and fill, this is a great impementation though, although it could be split to be
        // easier to read.
        this.gameboardArray = Array(height).fill(null).map(() => Array(width).fill(null));
    }

    // A function to figure out if a ship is hit or not
    recieveAttack(x, y){
        if (this.gameboard[x][y] == null){
            return ("not hit");
        }
        else{
            return ("hit!");
        }
    }

    isValidPosition(x, y) {
        // Check if the x-coordinate is greater than or equal to zero and less than the board's width
        if (x >= 0 && x < this.width + 1) {
            // Check if the y-coordinate is greater than or equal to zero and less than the board's height
            if (y >= 0 && y < this.height +1) {
                // If both conditions are met, the position is valid
                return true;
            } else {
                console.error(`The y-coordinate ${y} is not within the board's height bounds of ${this.height}`);
                return false;
            }
        } else {
            console.error(`The x-coordinate ${x} is not within the board's width bounds of ${this.width}`);
            return false;
        }
    }

    // creates a ship at a certain x or y co-ordinate and saves it in the board specified. 
    placeShip(ship) {
        // Generate random position and direction
        let x = Math.random() < 0.5 ? Math.floor(Math.random() * this.width) : 0;
        let y = Math.floor(Math.random() * this.height);
        let direction = 'horizontal'//Math.random() > 0.5 ? 'horizontal' : 'vertical';
        let endX = 0, endY = 0;

        // Determine the initial and final positions based on the direction
        if (direction === 'horizontal') {
            endX = x + ship.length - 1;
        } else {
            endY = y + ship.length - 1;
        }

        // Check if the ship fits on the board without overlapping
        if (this.checkOverlap(x, y, endX, endY, ship.length)) {
            return false; // The ship can't be placed here
        }

        // Place the ship on the board
        if (direction === 'horizontal') {
            for (let i = x; i <= endX; i++) {
                this.gameboardArray[y][i] = ship;
            }
            ship.x = x;
            ship.y = y;
            ship.endX = endX;
            ship.endY = endY;
        } else {
            for (let i = y; i <= endY; i++) {
                this.gameboardArray[x][i] = ship;
            }
            ship.x = x;
            ship.y = y;
            ship.endX = endX;
            ship.endY = endY;
        }
        
        return true;
    }

  checkOverlap(x, y, endX, endY, length) {
    for (let i = x; i <= endX; i++) {
        for (let j = y; j <= endY; j++) {
            if (!this.isValidPosition(i, j) || this.gameboardArray[i][j] !== null) {
                return true; // Ahoy! There's an overlap!
            }
        }
    }
    return false; // No overlap detected, all clear to place the ship!
}
}
// This method creates a blank grid at the start of each game. (I do not want to create 100 divs)
export function createGrid1(){
    const gridArea = document.getElementById("grid1");

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let gridItem = document.createElement("div");
            gridItem.className = "grid-Item1";
            gridArea.appendChild(gridItem);
        }
    }
}

export function createGrid2(){
    const gridArea2 = document.getElementById("grid2");

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let gridItem = document.createElement("div");
            gridItem.className = "grid-Item2";
            gridArea2.appendChild(gridItem);
        }
    }
}
