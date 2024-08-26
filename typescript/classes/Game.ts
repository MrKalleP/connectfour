import prompt from "../helpers/prompt.js";
import Player from "./Player.js";
import Board from "./Board.js";

export default class Game {
  playerX: Player = new Player("Default X", "X");
  playerO: Player = new Player("Default O", "O");
  board: Board;

  constructor() {
    this.createPlayers();
    this.board = new Board();
    this.startGameLoop();
  }

  createPlayers() {
    const playerXName = prompt("Spelare X:s namn: ") || "Spelare X";
    const playerOName = prompt("Spelare O:s namn: ") || "Spelare O";

    this.playerX = new Player(playerXName, "X");
    this.playerO = new Player(playerOName, "O");

    console.clear();
    console.log("Connect Four\n");
    console.log(
      `Spelare X: ${this.playerX.name} med marker: ${this.playerX.marker}`
    );
    console.log(
      `Spelare O: ${this.playerO.name} med marker: ${this.playerO.marker}`
    );
  }

  startGameLoop() {
    let currentPlayer = this.playerX;

    while (true) {
      this.board.render(); // Render the board before each move
      const move = prompt(
        `${currentPlayer.name} (${currentPlayer.marker}), ange en kolumn (1-7): `
      );
      const column = +move.trim() - 1;

      if (
        column < 0 ||
        column >= this.board.matrix[0].length ||
        isNaN(column)
      ) {
        console.log("Ogiltigt drag, försök igen.");
        continue;
      }

      if (!this.board.makeMove(currentPlayer.marker, column)) {
        console.log("Kolumnen är full, välj en annan.");
        continue;
      }

      currentPlayer =
        currentPlayer === this.playerX ? this.playerO : this.playerX;
    }
  }
}
