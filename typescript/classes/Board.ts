export default class Board {
  grid: string[][];
  currentPlayerColor: string;
  winner: boolean;
  isADraw: boolean;
  gameOver: boolean;

  constructor() {
    this.grid = Array.from({ length: 7 }, () =>
      Array.from({ length: 6 }, () => " ")
    );

    this.currentPlayerColor = "X";
    this.winner = false;
    this.isADraw = false;
    this.gameOver = false;
  }

  render() {
    let line = "\n" + "-".repeat(29) + "\n";
    console.log(
      line +
        this.grid
          .map((row) => row.map((column) => `| ${column} `).join("") + "|")
          .join(line) +
        line
    );
  }
}
