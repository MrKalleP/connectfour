import Player from "./Player.js";
export default class AIPlayer extends Player {
    constructor(name, marker) {
        super(name, marker);
    }
    makeAIMove(board) {
        const availableColumns = [];
        for (let col = 0; col < board.gamePlan[0].length; col++) {
            if (board.gamePlan[0][col] === " ") {
                availableColumns.push(col);
            }
        }
        const randomColumn = availableColumns[Math.floor(Math.random() * availableColumns.length)];
        return randomColumn;
    }
}
//# sourceMappingURL=AiPlayer.js.map