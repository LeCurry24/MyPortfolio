import React from "react";
import styles from "./Projacts.module.css";

const roseGala = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.roseGalaImage}></div>
        <div className={styles.title}>
          <span>Rose Gala</span>
        </div>
        <button className={styles.cartButton}>
          <span>Learn More</span>
        </button>
      </div>
    </>
  );
};

export default roseGala;
