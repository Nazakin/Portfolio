import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { NAVIGATION } from "../../consts";
import Button from "../UI/Button/Button";
import { useScroll } from "../../hooks/useScroll";
import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header: React.FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${styles.headerContainer} ${isScrolled || menuOpen? styles.scrolled : ""}`}>
      <span onClick={() => scrollTo("hero")}>
        <Logo />
      </span>
      <nav className={styles.navigationButtonsContainer}>
        {NAVIGATION.map(({ name, id }, index) => (
          <button key={index} className={styles.navigationButtons} onClick={() => scrollTo(id)}>
            {name}
          </button>
        ))}
        <ThemeButton />
        <Button text="Hire me" onClick={() => scrollTo("contact")} />
      </nav>
      <BurgerButton open={menuOpen} setOpen={setMenuOpen} />
      {menuOpen && <BurgerMenu setMenuOpen={setMenuOpen} />}
    </header>
  );
};

export default Header;
