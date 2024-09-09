import prompt from '../helpers/prompt.js';
import Player from './Player.js';
import Board from './Board.js';
import AIPlayer from './AiPlayer.js';
export default class Game {
    constructor() {
        this.playerX = new Player('Default X', 'X');
        this.playerO = new Player('Default O', 'O');
        this.createPlayers();
        this.board = new Board();
        this.startGameLoop();
    }
    createPlayers() {
        const playerXName = prompt("Player X:s namn (or type 'AI' for AI player): ") || 'Player X';
        const playerOName = prompt("Player O:s namn (or type 'AI' for AI player): ") || 'Player O';
        this.playerX =
            playerXName.toLowerCase() === 'ai'
                ? new AIPlayer('AI X', 'X')
                : new Player(playerXName, 'X');
        this.playerO =
            playerOName.toLowerCase() === 'ai'
                ? new AIPlayer('AI O', 'O')
                : new Player(playerOName, 'O');
        console.clear();
        console.log(`Player X: ${this.playerX.name} with marker: ${this.playerX.marker}`);
        console.log(`Player O: ${this.playerO.name} with marker: ${this.playerO.marker}`);
    }
    startGameLoop() {
        let currentPlayer = this.playerX;
        while (true) {
            console.clear();
            this.board.render();
            let column;
            if (currentPlayer instanceof AIPlayer) {
                column = currentPlayer.makeAIMove(this.board);
                console.log(`${currentPlayer.name} (${currentPlayer.marker}) chooses column ${column + 1}`);
            }
            else {
                const move = prompt(`${currentPlayer.name} (${currentPlayer.marker}), specify a column (1-7): `);
                column = +move.trim() - 1;
                if (column < 0 ||
                    column >= this.board.gamePlan[0].length ||
                    isNaN(column)) {
                    const wrongMove = prompt('Invalid move, try again.');
                    console.log(wrongMove);
                    continue;
                }
            }
            if (!this.board.makeMove(currentPlayer.marker, column)) {
                const fullColumn = prompt('The column is full, please choose another.');
                console.log(fullColumn);
                continue;
            }
            const winner = this.board.checkWinner();
            if (winner) {
                console.clear();
                this.board.render();
                console.log(`${currentPlayer.name} has won with marker ${currentPlayer.marker}!\n`);
                break;
            }
            if (this.board.drawCheck()) {
                console.clear();
                this.board.render();
                console.log('The game is a draw!');
                break;
            }
            currentPlayer =
                currentPlayer === this.playerX ? this.playerO : this.playerX;
        }
    }
}
//# sourceMappingURL=Game.js.map