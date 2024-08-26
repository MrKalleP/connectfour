export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = Array(6)
      .fill(null)
      .map(() => Array(7).fill(" "));
  }

  checkWinner(): string | null {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        const marker = this.matrix[row][col];
        if (
          marker !== " " &&
          marker === this.matrix[row][col + 1] &&
          marker === this.matrix[row][col + 2] &&
          marker === this.matrix[row][col + 3]
        ) {
          return marker;
        }
      }
    }

    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 3; row++) {
        const marker = this.matrix[row][col];
        if (
          marker !== " " &&
          marker === this.matrix[row + 1][col] &&
          marker === this.matrix[row + 2][col] &&
          marker === this.matrix[row + 3][col]
        ) {
          return marker;
        }
      }
    }

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const marker = this.matrix[row][col];
        if (
          marker !== " " &&
          marker === this.matrix[row + 1][col + 1] &&
          marker === this.matrix[row + 2][col + 2] &&
          marker === this.matrix[row + 3][col + 3]
        ) {
          return marker;
        }
      }
    }

    for (let row = 3; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        const marker = this.matrix[row][col];
        if (
          marker !== " " &&
          marker === this.matrix[row - 1][col + 1] &&
          marker === this.matrix[row - 2][col + 2] &&
          marker === this.matrix[row - 3][col + 3]
        ) {
          return marker;
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
          .map((cell) => ` ${cell === null ? " " : cell} `)
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
