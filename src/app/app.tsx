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

  const gameStatus = useMemo(() => getWinner(board), [board]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>Tic Tac Toe</div>
      <div
        className={styles.currTurnText}
        style={
          gameStatus
            ? {
                color: gameStatus.value === "tie" ? "orange" : "green",
              }
            : undefined
        }
      >
        {!gameStatus
          ? `Next Turn: ${currTurn}`
          : gameStatus.value === "tie"
          ? "Draw!"
          : `Winner: ${gameStatus.value}`}
      </div>
      <div className={styles.board}>
        {board.map((squareValue, index) => (
          <Square
            key={index}
            value={squareValue}
            clickable={gameStatus === null && !squareValue}
            highlight={
              gameStatus?.value !== "tie" &&
              gameStatus?.combination.includes(index)
            }
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
      {gameStatus && (
        <button
          onClick={() => {
            setBoard(Array(9).fill(null) as FixedSizeArray<SquareValue, 9>);
            setCurrTurn("X");
          }}
          className={styles.replayButton}
        >
          Play Again
        </button>
      )}
    </div>
  );
};
