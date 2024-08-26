export default class Board {
    matrix: string[][];
    constructor();
    checkWinner(): string | null;
    render(): void;
    makeMove(marker: "X" | "O", column: number): boolean;
}
