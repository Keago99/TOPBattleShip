export class gameboard{
    constructor(width = 10, height =10){
        this.width = width;
        this.height = height;
        // Learning map and fill, this is a great impementation though, although it could be split to be
        // easier to read.
        this.gameboardArray = Array(height).fill(null).map(() => Array(width).fill(null));
    }

    // A function to figure out if a ship is hit or not
    isHit(x, y){
        if (this.gameboard[x][y] == null){
            return ("not hit");
        }
        else{
            return ("hit!");
        }
    }

    // A function to figure out if a ship is here or not
    shipHere(x, y, board){

    }

    // creates a ship at a certain x or y co-ordinate and saves it in the board specified. 
    createShip(x,y,board){
        
    }
}

// This method creates a blank grid at the start of each game. (I do not want to create 100 divs)
export function createGrid1(){
    const gridArea = document.getElementById("grid1");

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let gridItem = document.createElement("div");
            gridItem.className = "grid-Item";
            gridArea.appendChild(gridItem);
        }
    }
}

export function createGrid2(){
    const gridArea2 = document.getElementById("grid2");

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let gridItem = document.createElement("div");
            gridItem.className = "grid-Item";
            gridArea2.appendChild(gridItem);
        }
    }
}
