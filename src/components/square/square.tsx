import styles from "./square.module.css";
import type { MouseEventHandler } from "react";
import type { SquareValue } from "../../types";
import xImage from "../../assets/x-image.png";
import oImage from "../../assets/o-image.png";

interface Props {
  value: SquareValue;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const Square: React.FC<Props> = ({ value, onClick }) => {
  return (
    <div className={styles.square} onClick={onClick}>
      {value === "X" && <img className={styles.xImage} src={xImage} />}
      {value === "O" && <img className={styles.oImage} src={oImage} />}
    </div>
  );
};
