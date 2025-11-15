import React from "react";
import styles from "./Hero.module.css";
import Button from "../UI/Button/Button";
import IconDown from "../Icons/IconDown";
import IconGitHub from "../Icons/IconGitHub";
import IconMail from "../Icons/IconMail";
import IconLinkedIn from "../Icons/IconLinkedIn";
import LinkItem from "../LinkItem/LinkItem";
import { useScroll } from "../../hooks/useScroll";

export const LINK_ITEMS = [
  { icon: <IconGitHub />, href: "https://github.com/Nazakin" },
  { icon: <IconLinkedIn />, href: "https://www.linkedin.com/in/nazar-kuchynskyi-a77613291/" },
  { icon: <IconMail />, href: "mailto:nazarkuchynskyi@gmail.com" },
];

const Hero: React.FunctionComponent = () => {
  const scrollTo = useScroll();

  return (
    <section className={styles.heroContainer} id="hero">
      <div className={styles.heroBackground}></div>
      <div className={styles.welcomeBadge}>{"👋"} Welcome to my portfolio</div>
      <h1 className={styles.heroText}>
        React & Next.js <br /> Developer
      </h1>
      <p className={styles.heroDesc}>
        Frontend Developer crafting scalable, user-focused web interfaces. <br />
        Passionate about clean, reusable code and delivering high-quality, <br />
        seamless digital experiences across modern React ecosystems.
      </p>
      <div className={styles.actionButtonsContainer}>
        <Button text="View my work" onClick={() => scrollTo("experience")} icon={<IconDown />} />
        <Button text="Get in Touch" onClick={() => scrollTo("hire")} variant="secondary" />
      </div>
      <div className={styles.linksContainer}>
        {LINK_ITEMS.map((item, index) => (
          <LinkItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
