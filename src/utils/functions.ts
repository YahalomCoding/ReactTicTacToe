import type { FixedSizeArray, SquareValue } from "../types";

export const getWinner = (
  board: FixedSizeArray<SquareValue, 9>
): SquareValue | null | "tie" => {
  const winningCombinations = [
    // horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
  ] as const;
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (!!board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  if (board.every((square) => !!square)) {
    return "tie";
  }
  return null;
};
