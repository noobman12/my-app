import React from "react";
import styles from "./loading.module.css";

type Props = { outerWidth?: string; innerWidth?: string; text?: string };

export default function loading({
  outerWidth = "235px",
  innerWidth = "120px",
  text,
}: Props) {
  return (
    <div className={styles.flex}>
      <div className={styles.outerLoading} style={{ width: outerWidth }}>
        <div
          className={styles.innerLoading}
          style={{ width: innerWidth }}
        ></div>
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
}
