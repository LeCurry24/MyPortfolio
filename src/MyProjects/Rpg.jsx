import React from "react";
import styles from "./Projacts.module.css";

const Rpg = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.rpgImage}></div>
        <div className={styles.title}>
          <span>RPG</span>
        </div>
        <button className={styles.cartButton}>
          <span>Learn More</span>
        </button>
      </div>
    </>
  );
};

export default Rpg;
