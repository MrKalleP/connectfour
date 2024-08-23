export default class Board {
  grid: string[][];

  constructor() {
    this.grid = [...new Array(6)].map((row) =>
      [...new Array(7)].map((column) => " ")
    );
  }
}
