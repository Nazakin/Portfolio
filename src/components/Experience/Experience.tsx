import React from "react";
import styles from "./Experience.module.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionDesc from "../UI/SectionDesc/SectionDesc";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { EXPERIENCE_ITEMS } from "../../consts";

const Experience: React.FunctionComponent = () => {
  return (
    <section id="experience" className={styles.experienceContainer}>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionDesc>My professional journey in web development</SectionDesc>

      <div className={styles.cardContainer}>
        {EXPERIENCE_ITEMS.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
