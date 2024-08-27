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
    const playerXName = prompt("Player X:s namne: ") || "Player X";
    const playerOName = prompt("Player O:s namne: ") || "Player O";

    this.playerX = new Player(playerXName, "X");
    this.playerO = new Player(playerOName, "O");

    console.clear();

    console.log(
      `Player X: ${this.playerX.name} with markers: ${this.playerX.marker}`
    );
    console.log(
      `Player O: ${this.playerO.name} with markers: ${this.playerO.marker}`
    );
  }

  startGameLoop() {
    let currentPlayer = this.playerX;
    while (true) {
      console.clear();
      this.board.render();
      const move = prompt(
        `${currentPlayer.name} (${currentPlayer.marker}), specify a column (1-7): `
      );
      const column = +move.trim() - 1;

      if (
        column < 0 ||
        column >= this.board.gamePlan[0].length ||
        isNaN(column)
      ) {
        const wrongMove = prompt("Invalid move, try again.");
        console.log(wrongMove);
        continue;
      }

      if (!this.board.makeMove(currentPlayer.marker, column)) {
        const fullColumn = prompt("The column is full, please choose another.");
        console.log(fullColumn);
        continue;
      }

      const winner = this.board.checkWinner();
      if (winner) {
        console.clear();
        this.board.render();
        console.log(
          `${currentPlayer.name} has won with marker ${currentPlayer.marker}!`
        );
        break;
      }

      if (this.board.drawCheck()) {
        console.clear();
        this.board.render();
        console.log("The game is a draw!");
        break;
      }

      currentPlayer =
        currentPlayer === this.playerX ? this.playerO : this.playerX;
    }
  }
}
