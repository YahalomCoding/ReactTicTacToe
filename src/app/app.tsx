import { useState } from "react";
import { Square } from "../components";
import styles from "./app.module.css";
import type { SquareValue } from "../types";

export const App: React.FC = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));

  const [currTurn, setCurrTurn] = useState<"X" | "O">("X");

  return (
    <>
      <div className={styles.header}>Tic Tac Toe</div>
      <div className={styles.currTurnText}>{`Current Turn: ${currTurn}`}</div>
      <div className={styles.board}>
        {board.map((squareValue, index) => (
          <Square
            key={index}
            value={squareValue}
            onClick={() => {
              const isLegalClick = !board[index];

              if (isLegalClick) {
                setBoard((prevBoard) =>
                  prevBoard.map((currSquareValue, currIndex) =>
                    currIndex === index ? currTurn : currSquareValue
                  )
                );

                setCurrTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
              }
            }}
          />
        ))}
      </div>
    </>
  );
};
