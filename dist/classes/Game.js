import prompt from "../helpers/prompt.js";
import Player from "./Player.js";
import Board from "./Board.js";
export default class Game {
    constructor() {
        this.playerX = new Player("Default X", "X");
        this.playerO = new Player("Default O", "O");
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
        console.log(`Spelare X: ${this.playerX.name} med marker: ${this.playerX.marker}`);
        console.log(`Spelare O: ${this.playerO.name} med marker: ${this.playerO.marker}`);
    }
    startGameLoop() {
        let currentPlayer = this.playerX;
        while (true) {
            console.clear();
            this.board.render();
            const move = prompt(`${currentPlayer.name} (${currentPlayer.marker}), ange en kolumn (1-7): `);
            const column = +move.trim() - 1;
            if (column < 0 ||
                column >= this.board.matrix[0].length ||
                isNaN(column)) {
                console.log("Ogiltigt drag, försök igen.");
                continue;
            }
            if (!this.board.makeMove(currentPlayer.marker, column)) {
                console.log("Kolumnen är full, välj en annan.");
                continue;
            }
            const winner = this.board.checkWinner();
            if (winner) {
                console.clear();
                this.board.render();
                console.log(`${currentPlayer.name} har vunnit med marker ${currentPlayer.marker}!`);
                break;
            }
            currentPlayer =
                currentPlayer === this.playerX ? this.playerO : this.playerX;
        }
    }
}
//# sourceMappingURL=Game.js.map