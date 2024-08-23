//import prompt from "./helpers/prompt.js";

import Player from "./classes/Player.js";
import Board from "./classes/Board.js";

const player1 = new Player("Kalle", "X");
const player2 = new Player("Sara", "O");

const board = new Board();

console.log(player1);
console.log(player2);

console.log(board.grid);
