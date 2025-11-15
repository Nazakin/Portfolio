import React from "react";
import styles from "./CardStack.module.css";
import CardWrapper from "../CardWrapper/CardWrapper";
import { getTechIcon } from "../../utils/getTechIcon";
import IconWrapper from "../IconWrapper/IconWrapper";
import { getColor } from "../../utils/getColor";

type Item = {
  title: string;
  tech: string[];
};

type Props = {
  item: Item;
};

const CardStack: React.FunctionComponent<Props> = ({ item }) => {
  const { title, tech } = item;

  return (
    <CardWrapper>
      <div className={styles.iconTitleContainer}>
        <IconWrapper customColor={getColor()} width={48} height={48}>
          {getTechIcon(title)}
        </IconWrapper>
        <h4 className={styles.techTitle}>{title}</h4>
      </div>

      <div className={styles.techItemsContainer}>
        {tech.map((tech) => (
          <div className={styles.techItem}>{tech}</div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default CardStack;
