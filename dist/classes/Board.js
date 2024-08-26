export default class Board {
    constructor() {
        this.matrix = Array(6)
            .fill(null)
            .map(() => Array(7).fill(" "));
    }
    // Function to check for a winner
    checkWinner() {
        // Check horizontal lines
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                // Only need to check up to the 4th column
                const marker = this.matrix[row][col];
                if (marker !== " " &&
                    marker === this.matrix[row][col + 1] &&
                    marker === this.matrix[row][col + 2] &&
                    marker === this.matrix[row][col + 3]) {
                    return marker;
                }
            }
        }
        // Check vertical lines
        for (let col = 0; col < 7; col++) {
            for (let row = 0; row < 3; row++) {
                // Only need to check up to the 3rd row
                const marker = this.matrix[row][col];
                if (marker !== " " &&
                    marker === this.matrix[row + 1][col] &&
                    marker === this.matrix[row + 2][col] &&
                    marker === this.matrix[row + 3][col]) {
                    return marker;
                }
            }
        }
        // Check diagonal lines (top-left to bottom-right)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 4; col++) {
                const marker = this.matrix[row][col];
                if (marker !== " " &&
                    marker === this.matrix[row + 1][col + 1] &&
                    marker === this.matrix[row + 2][col + 2] &&
                    marker === this.matrix[row + 3][col + 3]) {
                    return marker;
                }
            }
        }
        // Check diagonal lines (bottom-left to top-right)
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                const marker = this.matrix[row][col];
                if (marker !== " " &&
                    marker === this.matrix[row - 1][col + 1] &&
                    marker === this.matrix[row - 2][col + 2] &&
                    marker === this.matrix[row - 3][col + 3]) {
                    return marker;
                }
            }
        }
        // No winner found
        return null;
    }
    render() {
        console.clear();
        this.matrix.forEach((row) => console.log(row.join("|")));
        console.log("-".repeat(this.matrix[0].length * 2 - 1));
        console.log("1 2 3 4 5 6 7");
    }
    makeMove(marker, column) {
        for (let row = this.matrix.length - 1; row >= 0; row--) {
            if (this.matrix[row][column] === " ") {
                this.matrix[row][column] = marker;
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=Board.js.map