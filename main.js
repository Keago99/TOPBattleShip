// This will be the code that is used in the actual game, or the "main" javascript 
import { createGrid1, gameboard, createGrid2 } from "./gameboard.js";
import {player} from "./player.js";

createGrid1();
createGrid2();

const player1 = new player("real", new gameboard(10,10));
const player2 = new player("CPU", new gameboard(10, 10));




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
