import type { FixedSizeArray, SquareValue } from "../types";

export const getWinner = (
  board: FixedSizeArray<SquareValue, 9>
):
  | null
  | {
      value: NonNullable<SquareValue>;
      combination: readonly [number, number, number];
    }
  | { value: "tie" } => {
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
      return { value: board[a], combination };
    }
  }
  if (board.every((square) => !!square)) {
    return { value: "tie" };
  }
  return null;
};
