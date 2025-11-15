import React from "react";
import styles from "./ThemeButton.module.css";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { IconSun } from "../Icons/IconSun.tsx";
import { IconMoon } from "../Icons/IconMoon.tsx";

const ThemeButton: React.FunctionComponent = () => {
  const { toggleTheme, theme } = useChangeTheme();
  return (
    <button onClick={toggleTheme} className={styles.themeButton}>
      {theme === "light" ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeButton;
