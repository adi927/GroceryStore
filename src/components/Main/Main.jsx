import React, { useState } from "react";
import styles from "./Main.module.css";
import { veggies } from "../../helpers/objects.js";

const Main = () => {
  const [veggiesList, setVeggiesList] = useState(veggies);

  const deleteVeggie = (veggieName) => {
    setVeggiesList((current) =>
      current.filter((veggie) => veggie.name !== veggieName)
    );
  };

  return (
    <div className={styles.main}>
      {veggiesList.map((veggie) => (
        <div className={styles.objectDiv} key={veggie.name}>
          <img className={styles.img} src={veggie.image} alt="img"></img>
          <div className={styles.insideObject}>
            <h1 className={styles.h1}>{veggie.name}</h1>
            <div className={styles.properties}>
              <div className={styles.weight}>
                <p className={styles.p}>Waga</p>
                <p className={styles.paragraph}>
                  <span className={styles.span}>{veggie.weight}</span>
                </p>
              </div>
              <div className={styles.calories}>
                <p className={styles.p}>Kalorczyność</p>
                <p className={styles.paragraph}>
                  <span className={styles.span}>{veggie.calories}</span>
                </p>
              </div>
              <div className={styles.origin}>
                <p className={styles.p}>Pochodzenie</p>
                <p className={styles.paragraph}>
                  <span className={styles.span}>{veggie.origin}</span>
                </p>
              </div>
            </div>
            <div className={styles.taste}>
              <p className={styles.p}>Smak i tekstura</p>
              <p className={styles.tasteParagraph}>{veggie.taste}</p>
            </div>
          </div>
          <p className={styles.price}>
            <span className={styles.priceSpan}>Cena: </span>
            {veggie.price}
          </p>
          <p
            className={styles.deleteButton}
            onClick={() => {
              deleteVeggie(veggie.name);
            }}
          >
            <span className={styles.spanDelete}>X</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
