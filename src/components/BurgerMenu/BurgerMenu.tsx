import React, { useEffect } from "react";
import styles from "./BurgerMenu.module.css";
import { NAVIGATION } from "../../consts";
import { useScroll } from "../../hooks/useScroll";
import Button from "../UI/Button/Button";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";

type Props = {
  setMenuOpen: (open: boolean) => void;
};

const BurgerMenu: React.FunctionComponent<Props> = ({ setMenuOpen }) => {
  const scrollTo = useScroll();

  const handleClick = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 840) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMenuOpen]);

  return (
    <div className={styles.overlay}>
      <div className={styles.mobileMenu}>
        {NAVIGATION.map(({ name, id }, index) => (
          <button key={index} className={styles.mobileMenuButton} onClick={() => handleClick(id)}>
            {name}
          </button>
        ))}
        <Button text="Hire me" onClick={() => handleClick("contact")} />
        <ThemeButton />
      </div>
    </div>
  );
};

export default BurgerMenu;
