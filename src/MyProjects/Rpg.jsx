import React, { useState } from "react";
import styles from "./Projacts.module.css";

const Rpg = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.rpgImage}></div>
        <div className={styles.title}>
          <span>RPG</span>
        </div>
        <button onClick={() => setShow(!show)} className={styles.cartButton}>
          <span>Learn More</span>
        </button>
      </div>
      {show && (
        <div className={styles.cover}>
          <div className={styles.popOver}>
            <div className={styles.imageRPG}></div>
            <div className={styles.chooChooContent}>
              <div className={styles.titleBtn}>
                <b>RPG</b>
              </div>
              <button
                className={styles.closebtn}
                onClick={() => setShow(!show)}
              >
                X
              </button>
              <p className={styles.chooChooP}>
                Only One Path to Escape is a thrilling text-based role-playing
                game coded in Python, where every choice can mean life or death.
                Trapped in a luxurious mansion, you must navigate a series of
                tense decisions to find the single path to freedom. With time
                running out, you're faced with a crucial choice: do you make
                your escape in the raw power of a Trackhawk SUV, or opt for the
                sleek speed of a Lamborghini sports car? Choose wisely, because
                one path leads to safety, while the other ends in disaster.
                There are no second chances—only the right choice will ensure
                your survival in this high-stakes game of escape.
              </p>
              <ul>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rpg;
