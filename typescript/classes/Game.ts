import prompt from "../helpers/prompt.js";
import Player from "./Player.js";

export default class Game {
  playerX: Player;
  playerO: Player;

  constructor() {
    const playerXName = prompt("Spelare X:s namn: ") || "Spelare X";
    const playerOName = prompt("Spelare O:s namn: ") || "Spelare O";

    this.playerX = new Player(playerXName, "X");
    this.playerO = new Player(playerOName, "O");

    console.clear();
    console.log("Connect Four\n");

    console.log(
      `Spelare X: ${this.playerX.name} med marker: ${this.playerX.marker}`
    );
    console.log(
      `Spelare O: ${this.playerO.name} med marker: ${this.playerO.marker}`
    );
  }
}
