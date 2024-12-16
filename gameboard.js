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
    shipHere(){

    }
}