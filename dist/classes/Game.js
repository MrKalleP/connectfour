import prompt from "../helpers/prompt.js";
import Player from "./Player.js";
import Board from "./Board.js";
export default class Game {
    constructor() {
        while (true) {
            this.createPlayer();
            this.board = new Board();
            this.startGameLoop();
        }
    }
    createPlayer() {
        const playerXName = prompt("Spelare X:s namn: ") || "Spelare X";
        const playerOName = prompt("Spelare O:s namn: ") || "Spelare O";
        this.playerX = new Player(playerXName, "X");
        this.playerO = new Player(playerOName, "O");
        console.clear();
        console.log("Connect Four\n");
        console.log(`Spelare X: ${this.playerX.name} med marker: ${this.playerX.marker}`);
        console.log(`Spelare O: ${this.playerO.name} med marker: ${this.playerO.marker}`);
    }
    startGameLoop() {
        while (!this.board.gameOver) {
            console.clear();
            this.board.render();
            const player = this.board.currentPlayerColor === "X" ? this.playerX : this.playerO;
            const move = prompt(`Ange ditt drag ${player.marker} ${player.name} - skriv in kolumn: `);
            const column = +move.trim() - 1;
            console.log(column);
            /* if (!this.board.makeMove(player.marker, column)) {
              continue;
            } */
        }
        console.clear();
        this.board.render();
    }
}
//# sourceMappingURL=Game.js.map