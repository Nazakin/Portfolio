import React from "react";
import styles from "./CardComponent.module.css";
import CardWrapper from "../CardWrapper/CardWrapper";
import IconWrapper from "../IconWrapper/IconWrapper";

type Props = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const CardComponent: React.FunctionComponent<Props> = ({ title, desc, icon }) => {
  return (
    <div className={styles.cardComponentWrapper}>
      <IconWrapper width={48} height={48}>
        {icon}
      </IconWrapper>
      <h6 className={styles.cardTitle}>{title}</h6>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
};

export default CardComponent;
