import React from "react";
import styles from "./IconButton.module.css";

type Props = {
  text?: string;
  color?: string;
  bgColor?: string;
  iconLeft?: string;
  iconRight?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
};

export default function IconButton({
  text = "Button Text",
  color = "white",
  bgColor = "black",
  iconLeft,
  iconRight,
  width,
  height,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}: Props) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {iconLeft && (
        <img
          src={iconLeft}
          alt=''
          width={width}
          height={height}
          style={{ marginLeft }}
        />
      )}
      <span style={{ color: color, backgroundColor: bgColor, marginRight }}>
        {text}
      </span>
      {iconRight && (
        <img src={iconRight} alt='' width={width} height={height} />
      )}
    </div>
  );
}
