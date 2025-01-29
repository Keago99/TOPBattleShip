// This will be the code that is used in the actual game, or the "main" javascript 
import { createGrid1, gameboard, createGrid2 } from "./gameboard.js";
import {player} from "./player.js";
import { ship } from "./ship.js";

createGrid1();
createGrid2();

const player1 = new player("real");
const player2 = new player("CPU");


player1.gameboard.placeShip(new ship(5));

for (let x = 0; x < player1.gameboard.width; x++) {
    for (let y = 0; y < player1.gameboard.height; y++) {
        const Shippers = player1.gameboard.gameboardArray[y][x];
        if (Shippers instanceof ship) {
            console.log(`Ship found at coordinates [${x}, ${y}]:`);
        }
    }
}



// create two players
// each gameboard has 5 ships placed randomly

// prompt the player to click on the gameboard
// search the opponents gameboard for the corresponding x and y
// show a hit or a miss
// if hit damage their ship, then check if sunk, then update the grid
// if miss update the map
// small delay
// show the players board or what the opponent can see
// small delay
// CPU randomly chooses a place
// hit or miss, then update the board, swap back.
