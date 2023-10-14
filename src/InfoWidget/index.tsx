import React from "react";
import styles from "./index.module.css";

type Props = {
  textLeft?: string;
  textRight?: string;
  iconLeft?: string;
  iconRight?: string;
  scores?: string;
  height?: string;
  padding?: string;
  alignSelf?: string;
};

export default function index({
  textLeft,
  iconLeft,
  scores,
  textRight,
  iconRight,
  height,
  padding,
  alignSelf,
}: Props) {
  return (
    <div className={styles.widget} style={{ padding, alignSelf }}>
      {textLeft && <span className={styles.text}>{textLeft}</span>}
      {iconLeft && <img alt='123' style={{ padding }} src={iconLeft}></img>}
      {scores && <div className={styles.text}>{scores}</div>}
      {iconRight && <img alt='123' src={iconRight}></img>}
      {textRight && <span className={styles.text}>{textRight}</span>}
    </div>
  );
}
