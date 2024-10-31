import React from "react";
import styles from "./Projacts.module.css";

const projectCard = () => {
  return (
    /* Choo Choo chat */
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}></div>
        <div className={styles.title}>
          <span>Choo Choo Chat</span>
        </div>
        <button className={styles.cartButton}>
          <span>Learn More</span>
        </button>
      </div>
    </>
  );
};

export default projectCard;
