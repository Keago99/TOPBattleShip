class gameboard{
    constructor(width = 10, height =10){
        this.width = width;
        this.height = height;
        // Learning map and fill, this is a great impementation though, although it could be split to be
        // easier to read.
        this.gameboard = Array(height).fill(null).map(() => Array(width).fill(null));
    }

    // A function to figure out if a ship is hit or not
    isHit(){

    }

    // A function to figure out if a ship is here or not
    shipHere(x, y, board){

    }
}

// This method creates a blank grid at the start of each game. (I do not want to create 100 divs)
export function createGrid(){
    const gridArea = document.getElementById("gridArea");

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridArea.appendChild(gridItem);
        }
    }
}
