export default class Board {
  grid: string[][];

  constructor() {
    this.grid = [...new Array(6)].map(() => [...new Array(7)].map(() => " "));
  }
}
