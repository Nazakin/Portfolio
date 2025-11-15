import React from "react";
import styles from "./BurgerButton.module.css";
import IconBurger from "../Icons/IconBurger";
import IconCross from "../Icons/IconCross";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const BurgerButton: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <button onClick={() => setOpen(!open)} className={styles.burgerButton}>
      {open ? <IconCross /> : <IconBurger />}
    </button>
  );
};

export default BurgerButton;
