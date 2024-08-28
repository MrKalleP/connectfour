import Player from "./Player.js";
import Board from "./Board.js";
export default class AIPlayer extends Player {
    constructor(name: string, marker: "X" | "O");
    makeAIMove(board: Board): number;
}
