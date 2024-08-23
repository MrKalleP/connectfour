export default class Board {
  grid: string[][];

  constructor() {
    this.grid = Array.from({ length: 7 }, () =>
      Array.from({ length: 6 }, () => " ")
    );
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
