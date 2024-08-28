import Player from "./Player.js";
import Board from "./Board.js";

export default class AIPlayer extends Player {
  constructor(name: string, marker: "X" | "O") {
    super(name, marker);
  }

  makeAIMove(board: Board): number {
    const availableColumns: number[] = [];

    for (let col = 0; col < board.gamePlan[0].length; col++) {
      if (board.gamePlan[0][col] === " ") {
        availableColumns.push(col);
      }
    }

    const randomColumn =
      availableColumns[Math.floor(Math.random() * availableColumns.length)];
    return randomColumn;
  }
}
