import React from "react";
import styles from "./CardWrapper.module.css";

type Props = {
  children: React.ReactNode;
  center?: boolean;
  isLarge?: boolean;
};

const CardWrapper: React.FunctionComponent<Props> = ({ children, center, isLarge = false }) => {
  return (
    <div
      className={`${styles.cardWrapper} ${isLarge ? styles.large : styles.small}`}
      style={{ alignItems: center ? "center" : "" }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
