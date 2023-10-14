import React from "react";
import styles from "./index.module.css";

type Props = {
  text?: string;
  iconLeft?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  iconMore?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
};

export default function index({
  text,
  iconLeft,
  textColor,
  fontSize,
  fontWeight,
  iconMore,
  backgroundColor,
  borderColor,
  padding,
}: Props) {
  return (
    <div
      className={styles.widget}
      style={{ backgroundColor, borderColor, padding }}
    >
      <div className={styles.flex}>
        {iconLeft && <img alt='1233' src={iconLeft}></img>}
        <span
          className={styles.textStyle}
          style={{ color: textColor, fontSize, fontWeight }}
        >
          {text}
        </span>
      </div>
      {iconMore && <div>{iconMore}</div>}
    </div>
  );
}
