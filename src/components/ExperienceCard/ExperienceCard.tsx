import React from "react";
import styles from "./ExperienceCard.module.css";
import IconBriefCase from "../Icons/IconBriefCase";
import CardWrapper from "../CardWrapper/CardWrapper";
import IconWrapper from "../IconWrapper/IconWrapper";

type Technology = string;

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: Technology[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}) => {
  return (
    <CardWrapper isLarge>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <IconWrapper>
            <IconBriefCase />
          </IconWrapper>
          <div>
            <div className={styles.title}>{title}</div>
            <p className={styles.company}>{company}</p>
          </div>
        </div>
        <div className={styles.period}>{period}</div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Key Achievements:</h4>
        <ul className={styles.achievementList}>
          {achievements.map((a, i) => (
            <li key={i} className={styles.achievementItem}>
              <span className={styles.bullet}>•</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Technologies:</h4>
        <div className={styles.techList}>
          {technologies.map((tech, i) => (
            <div key={i} className={styles.techBadge}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default ExperienceCard;
