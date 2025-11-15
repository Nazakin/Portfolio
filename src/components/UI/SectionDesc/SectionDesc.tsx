import React from "react";
import styles from "./SectionDesc.module.css";

type Props = {
  children: React.ReactNode;
};

const SectionDesc: React.FunctionComponent<Props> = ({ children }) => {
  return <p className={styles.sectionDesc}>{children}</p>;
};

export default SectionDesc;
