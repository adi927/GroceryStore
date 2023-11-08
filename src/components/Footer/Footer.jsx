import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.hoursOpen}>
        <p className={styles.shopText}>SKLEP CZYNNY</p>
        <div>
          <p className={styles.paragraph}>
            <span className={styles.spanHours}>PON</span>-
            <span className={styles.spanHours}>PT</span>
          </p>
        </div>
        <div>
          <p className={styles.paragraph}>
            <span className={styles.spanHours}>8:00</span>-
            <span className={styles.spanHours}>18:00</span>
          </p>
        </div>
      </div>
      <div className={styles.shopStatus}>
        <p className={styles.shopStatusText}>SKLEP JEST TERAZ</p>
        <p className={styles.spanStatus}>ZAMKNIĘTY</p>
      </div>
    </footer>
  );
};

export default Footer;
