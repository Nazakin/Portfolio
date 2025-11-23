import React from "react";
import styles from "./Contact.module.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionDesc from "../UI/SectionDesc/SectionDesc";
import { CONTACT_ITEMS } from "../../consts";
import CardContact from "../CardContact/CardContact";

const Contact: React.FunctionComponent = () => {
  return (
    <section id="contact" className={styles.contactContainer}>
      <SectionTitle>Let's Work Together</SectionTitle>
      <SectionDesc>I'm always open to discussing new projects and opportunities</SectionDesc>

      <div className={styles.contactCards}>
        {CONTACT_ITEMS.map((item) => (
          <CardContact item={item} />
        ))}
      </div>
      <p className={styles.legal}>© 2025 Nazar Kuchynskyi. Built with React & Next.js</p>
    </section>
  );
};

export default Contact;
