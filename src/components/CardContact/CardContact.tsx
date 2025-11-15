import React from "react";
import styles from "./CardContact.module.css";
import CardWrapper from "../CardWrapper/CardWrapper";
import IconWrapper from "../IconWrapper/IconWrapper";
import { getTechIcon } from "../../utils/getTechIcon";

type Item = {
  title: string;
  link: string;
};

type Props = {
  item: Item;
};

const CardContact: React.FunctionComponent<Props> = ({ item }) => {
  const { title, link } = item;

  const truncateLink = (link: string, maxLength = 30) => {
    if (link.length <= maxLength) return link.replace("mailto:", "");
    const cleanLink = link.replace("mailto:", "");
    return cleanLink.slice(0, 30) + "...";
  };

  return (
    <a href={link} target="_blank">
      <CardWrapper>
        <div className={styles.contactConatiner}>
          <IconWrapper width={48} height={48}>
            {getTechIcon(item.title)}
          </IconWrapper>
          <div className={styles.contactInfoContainer}>
            <h4>{title}</h4>
            <p className={styles.contactDesc}>{truncateLink(link)}</p>
          </div>
        </div>
      </CardWrapper>
    </a>
  );
};

export default CardContact;
