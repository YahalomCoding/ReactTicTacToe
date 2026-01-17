import styles from "./square.module.css";
import type { MouseEventHandler } from "react";
import type { SquareValue } from "../../types";
import { X } from "./X.tsx";
import { O } from "./O.tsx";

interface Props {
  value: SquareValue;
  onClick: MouseEventHandler<HTMLDivElement>;
  highlight?: boolean;
  clickable?: boolean;
}

export const Square: React.FC<Props> = ({
  value,
  onClick,
  clickable = true,
  highlight = false,
}) => {
  return (
    <div
      className={styles.square}
      style={{
        cursor: clickable ? "pointer" : undefined,
        color: highlight ? "green" : undefined,
      }}
      onClick={clickable ? onClick : undefined}
    >
      {value === "X" && <X width="90%" height="90%" />}
      {value === "O" && <O />}
    </div>
  );
};
