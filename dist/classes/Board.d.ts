export default class Board {
    gamePlan: string[][];
    constructor();
    checkWinner(): string | null;
    drawCheck(): boolean;
    render(): void;
    makeMove(marker: 'X' | 'O', column: number): boolean;
}
