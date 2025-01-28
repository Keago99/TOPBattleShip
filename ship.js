
export class ship{
    constructor(length){
        this.length = length;
        hits = 0;
        isSunk = false
    }

    // Method used whenever a ship is hit
    hit(){
        this.hits++;
    }

    // Method used to calculate if a ship is sunk
    isSunk(){
        if (hits >= length){
            isSunk = true;
        }
        return this.isSunk;
    }

}