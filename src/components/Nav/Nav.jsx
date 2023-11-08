import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.wrapperNav}>
      <h1 className={styles.h1}>INTERNETOWY SKLEP Z EKO-WARZYWAMI</h1>
      <h4 className={styles.h4}>Najlepsze eko-warzywa w twojej okolicy!</h4>
    </nav>
  );
};

export default Nav;
