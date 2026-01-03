import { useMemo, useState } from "react";
import { Square } from "../components";
import styles from "./app.module.css";
import type { FixedSizeArray, SquareValue } from "../types";
import { getWinner } from "../utils/functions";

export const App: React.FC = () => {
  const [board, setBoard] = useState<FixedSizeArray<SquareValue, 9>>(
    Array(9).fill(null) as FixedSizeArray<SquareValue, 9>
  );

  const [currTurn, setCurrTurn] = useState<"X" | "O">("X");

  const winner = useMemo(() => getWinner(board), [board]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>Tic Tac Toe</div>
      <div className={styles.currTurnText}>{`Current Turn: ${currTurn}`}</div>
      <div className={styles.board}>
        {board.map((squareValue, index) => (
          <Square
            key={index}
            value={squareValue}
            clickable={winner === null && !squareValue}
            onClick={() => {
              const isLegalClick = !board[index];

              if (isLegalClick) {
                setBoard(
                  (prevBoard) =>
                    prevBoard.map((currSquareValue, currIndex) =>
                      currIndex === index ? currTurn : currSquareValue
                    ) as FixedSizeArray<SquareValue, 9>
                );

                setCurrTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
              }
            }}
          />
        ))}
      </div>
      {winner && (
        <div
          className={styles.winnerContainer}
          style={{
            color: winner === "tie" ? "orange" : "green",
          }}
        >
          {winner === "tie" ? "It's a tie!" : `The Winner is: ${winner}`}
          <button
            onClick={() =>
              setBoard(Array(9).fill(null) as FixedSizeArray<SquareValue, 9>)
            }
            className={styles.replayButton}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};
