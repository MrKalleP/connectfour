export default class Board {
    gamePlan: string[][];
    constructor();
    checkWinner(): string | null;
    render(): void;
    makeMove(marker: "X" | "O", column: number): boolean;
}
