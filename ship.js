
export class ship{
    constructor(length){
        this.length = length;
        this.x = 0; // Starting position
        this.y = 0;
        this.endX = 0; // Ending position
        this.endY = 0;
        this.hits = 0;
        this.isSunk = false;
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

    toString() {
        return `Ship [${this.length}] at ${this.x}:${this.y} to ${this.endX}:${this.endY}, direction: ${this.direction}`;
    }

}