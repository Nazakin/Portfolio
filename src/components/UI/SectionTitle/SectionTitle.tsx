import React from "react";
import styles from "./SectionTitle.module.css";

type Props = {
  children: React.ReactNode;
};

const SectionTitle: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <h2 className={styles.aboutTitle}>{children}</h2>
      <hr className={styles.gradientLine} />
    </>
  );
};

export default SectionTitle;
