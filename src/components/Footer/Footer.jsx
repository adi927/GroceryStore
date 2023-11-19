import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  let hour = date.getHours();

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
            <span className={styles.spanHours}>6:00</span>-
            <span className={styles.spanHours}>18:00</span>
          </p>
        </div>
      </div>
      <div className={styles.shopStatus}>
        <p className={styles.shopStatusText}>SKLEP JEST TERAZ</p>
        <p
          className={
            hour >= 6 && hour < 18
              ? styles.spanStatusOpen
              : styles.spanStatusClose
          }
        >
          {hour >= 6 && hour < 18 ? `Otwarty` : `Zamknięty`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
