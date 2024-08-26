export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = Array(6)
      .fill(null)
      .map(() => Array(7).fill(" "));
  }

  checkWinner(): string | null {
    const directions = [
      { row: 0, col: 1 }, // Horizontal
      { row: 1, col: 0 }, // Vertical
      { row: 1, col: 1 }, // Diagonal top-left to bottom-right
      { row: -1, col: 1 }, // Diagonal bottom-left to top-right
    ];

    const checkDirection = (
      startRow: number,
      startCol: number,
      directionRow: number,
      directionCol: number
    ): string | null => {
      const marker = this.matrix[startRow][startCol];
      if (marker === " ") return null;
      for (let i = 1; i < 4; i++) {
        const row = startRow + directionRow * i;
        const col = startCol + directionCol * i;
        if (
          row < 0 ||
          row >= 6 ||
          col < 0 ||
          col >= 7 ||
          this.matrix[row][col] !== marker
        ) {
          return null;
        }
      }
      return marker;
    };

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        for (const { row: dRow, col: dCol } of directions) {
          const winner = checkDirection(row, col, dRow, dCol);
          if (winner) return winner;
        }
      }
    }

    return null;
  }

  render(): void {
    console.clear();

    const horizontalSeparator = "+---".repeat(7) + "+";

    const boardString = this.matrix
      .map((row) => {
        const rowString = row
          .map((element) => ` ${element === null ? " " : element} `)
          .join("|");
        return `${horizontalSeparator}\n|${rowString}|`;
      })
      .join("\n");

    console.log(boardString);
    console.log(horizontalSeparator);
    console.log("  1   2   3   4   5   6   7");
  }

  makeMove(marker: "X" | "O", column: number): boolean {
    for (let row = this.matrix.length - 1; row >= 0; row--) {
      if (this.matrix[row][column] === " ") {
        this.matrix[row][column] = marker;
        return true;
      }
    }
    return false;
  }
}
