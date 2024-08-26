export default class Board {
    constructor() {
        // Create a 6x7 grid for Connect Four, initialized with empty spaces
        this.matrix = Array(6)
            .fill(null)
            .map(() => Array(7).fill(" "));
    }
    render() {
        // Render the board to the console
        console.clear();
        this.matrix.forEach((row) => console.log(row.join("|")));
        console.log("-".repeat(this.matrix[0].length * 2 - 1)); // Draw a separator line
        console.log("1 2 3 4 5 6 7"); // Display column numbers for reference
    }
    makeMove(marker, column) {
        // Place the marker in the lowest empty row of the selected column
        for (let row = this.matrix.length - 1; row >= 0; row--) {
            if (this.matrix[row][column] === " ") {
                this.matrix[row][column] = marker;
                return true;
            }
        }
        return false; // Return false if the column is full
    }
}
//# sourceMappingURL=Board.js.map