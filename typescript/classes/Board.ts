export default class Board {
  gamePlan: string[][];

  constructor() {
    this.gamePlan = Array(6)
      .fill(null)
      .map(() => Array(7).fill(' '));
  }

  checkWinner(): string | null {
    const matrixDirections = [
      { row: 0, col: 1 }, // Horizontal
      { row: 1, col: 0 }, // Vertical
      { row: 1, col: 1 }, // Diagonal top-left to bottom-right
      { row: -1, col: 1 }, // Diagonal bottom-left to top-right
    ];

    const checkDirection = (
      startingRow: number,
      startingColumn: number,
      directionRows: number,
      directionColumns: number
    ): string | null => {
      const marker = this.gamePlan[startingRow][startingColumn];
      if (marker === ' ') return null;
      for (let i = 1; i < 4; i++) {
        const row = startingRow + directionRows * i;
        const col = startingColumn + directionColumns * i;
        if (
          row < 0 ||
          row >= 6 ||
          col < 0 ||
          col >= 7 ||
          this.gamePlan[row][col] !== marker
        ) {
          return null;
        }
      }
      return marker;
    };

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        for (const {
          row: directionsRow,
          col: directionsColumn,
        } of matrixDirections) {
          const winner = checkDirection(
            row,
            col,
            directionsRow,
            directionsColumn
          );
          if (winner) return winner;
        }
      }
    }
    return null;
  }

  drawCheck() {
    return !this.checkWinner() && !this.gamePlan.flat().includes(' ');
  }

  render(): void {
    console.clear();

    console.log(`          Connect 4         `);

    const horizontalSeparator = '+---'.repeat(7) + '+';

    const boardString = this.gamePlan
      .map((row) => {
        const rowString = row
          .map((element) => ` ${element === null ? ' ' : element} `)
          .join('|');
        return `${horizontalSeparator}\n|${rowString}|`;
      })
      .join('\n');

    console.log(boardString);
    console.log(horizontalSeparator);
    console.log('  1   2   3   4   5   6   7');
  }

  makeMove(marker: 'X' | 'O', column: number): boolean {
    if (column < 0 || column >= this.gamePlan[0].length) {
      return false;
    }

    for (let row = this.gamePlan.length - 1; row >= 0; row--) {
      if (this.gamePlan[row][column] === ' ') {
        this.gamePlan[row][column] = marker;
        return true;
      }
    }
    return false;
  }
}
