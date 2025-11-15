import React from "react";
import styles from "./IconWrapper.module.css";

type Props = {
  children: React.ReactNode;
  customColor?: React.CSSProperties;
  width?: number;
  height?: number;
};

const IconWrapper: React.FunctionComponent<Props> = ({ children, customColor, width, height }) => {
  return (
    <div
      className={styles.iconWrapper}
      style={{
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
        ...customColor,
      }}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
