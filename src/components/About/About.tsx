import React from "react";
import styles from "./About.module.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionDesc from "../UI/SectionDesc/SectionDesc";
import CardComponent from "../CardComponent/CardComponent";
import IconCode from "../Icons/IconCode";
import IconPerfomance from "../Icons/IconPerfomance";
import IconCollaboration from "../Icons/IconCollaboration";
import IconInnovation from "../Icons/IconInnovation";

const INFO = [
  {
    title: "Clean Code",
    desc: "I drove UI Kit standardization and modernized legacy code via large-scale refactoring and migration to TypeScript.",
    icon: <IconCode />,
  },
  {
    title: "Performance",
    desc: "I cut average component development time by 25% and launched a personalized banner rotation system to boost engagement.",
    icon: <IconPerfomance />,
  },
  {
    title: "Collaboration",
    desc: "I drive product innovation by collaborating with cross-functional teams and ensure technical alignment with Backend and Design.",
    icon: <IconCollaboration />,
  },
  {
    title: "Innovation",
    desc: "I spearheaded greenfield e-commerce development and my analysis of user feedback contributed to a 20% increase in user retention.",
    icon: <IconInnovation />,
  },
];

const About: React.FunctionComponent = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <SectionTitle>About me</SectionTitle>
      <div className={styles.aboutMeInfo}>
        <img src="/assets/IMG_6710.jpg" alt="About me" className={styles.myImage} />
        <div className={styles.aboutMeDescription}>
          <SectionDesc>
            I am a Frontend Developer specializing in React and Next.js, crafting scalable,
            user-focused interfaces and maintaining clean, reusable code within modern ecosystems.
          </SectionDesc>

          <SectionDesc>
            I have delivered key features such as personalized banner rotation systems that boosted
            engagement, and I’ve standardized UI Kits to accelerate cross-team development. I also
            modernize legacy codebases, migrating to TypeScript for improved stability.
          </SectionDesc>

          <SectionDesc>
            I collaborate closely with Product, Design, and QA teams, ensuring technical alignment
            and high-quality deployments. I implement comprehensive unit tests (Jest/RTL) and E2E
            automation, while analyzing user feedback to improve UX and retention.
          </SectionDesc>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {INFO.map((item) => (
          <CardComponent title={item.title} desc={item.desc} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default About;
