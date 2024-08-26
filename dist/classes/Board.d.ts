export default class Board {
    matrix: string[][];
    constructor();
    render(): void;
    makeMove(marker: "X" | "O", column: number): boolean;
}
