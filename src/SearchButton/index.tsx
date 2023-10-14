import React from "react";
import styles from "./index.module.css";

type Props = {
  iconLeft?: React.ReactNode;
  iconRight?: string;
  text?: string;
  fontWeight?: string;
  color?: string;
  textWidth?: string;
  iconBgColor?: string;
  borderRadius?: string;
  iconBorderRadius?: string;
};

export default function index({
  iconLeft,
  iconRight = "",
  text,
  fontWeight,
  color,
  textWidth,
  iconBgColor,
  borderRadius,
  iconBorderRadius,
}: Props) {
  return (
    <div className={styles.container} style={{ borderRadius: borderRadius }}>
      <div className={styles.flex}>
        {iconLeft && <div>{iconLeft}</div>}
        {text && (
          <span
            className={styles.text}
            style={{ fontWeight, color, width: textWidth }}
          >
            {text}
          </span>
        )}
        {iconRight !== "" && (
          <img
            alt='dwadwa'
            className={styles.padding8}
            src={iconRight}
            style={{
              backgroundColor: iconBgColor,
              borderRadius: iconBorderRadius,
            }}
          ></img>
        )}
      </div>
    </div>
  );
}
