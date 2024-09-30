import React from "react";
import styles from "./Projacts.module.css";

const Rpg = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image3}></div>
      <div className={styles.content}>
        <h3 className={styles.h3}>RPG</h3>
        {/* <a href=" " target="_blank">
          <span className={styles.title}>Live Profect</span>
        </a> */}
        <p className={styles.roseGalaP}>
          Only One Path to Escape is a thrilling text-based role-playing
          game coded in Python, where every choice can mean life or death.
          Trapped in a luxurious mansion, you must navigate a series of tense
          decisions to find the single path to freedom. With time running out,
          you're faced with a crucial choice: do you make your escape in the raw
          power of a Trackhawk SUV, or opt for the sleek speed of a Lamborghini
          sports car? Choose wisely, because one path leads to safety, while the
          other ends in disaster. There are no second chances—only the right
          choice will ensure your survival in this high-stakes game of escape.
        </p>
        <div>
          <ul className={styles.tag}>
            <li class={styles.tagName}>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rpg;
