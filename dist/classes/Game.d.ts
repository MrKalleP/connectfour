import Player from "./Player.js";
import Board from "./Board.js";
export default class Game {
    playerX: Player;
    playerO: Player;
    board: Board;
    constructor();
    createPlayers(): void;
    startGameLoop(): void;
}
