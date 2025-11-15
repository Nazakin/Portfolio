import React from "react";
import styles from "./TechStack.module.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionDesc from "../UI/SectionDesc/SectionDesc";
import { TECH_STACK } from "../../consts";
import CardStack from "../CardStack/CardStack";

const TechStack: React.FunctionComponent = () => {
  return (
    <section id="tech-stack" className={styles.techContainer}>
      <SectionTitle>Tech Stack</SectionTitle>
      <SectionDesc>Technologies and tools I work with</SectionDesc>

      <div className={styles.techItemsContainer}>
        {TECH_STACK.map((item) => (
          <CardStack item={item} key={item.title} />
        ))}
      </div>
      <SectionDesc>
        Always learning and exploring new technologies to stay at the forefront of web development
      </SectionDesc>
    </section>
  );
};

export default TechStack;
