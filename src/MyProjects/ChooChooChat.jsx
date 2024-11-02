import React, { useState } from "react";
import styles from "./Projacts.module.css";

const projectCard = () => {
  const [show, setShow] = useState(false);
  return (
    /* Choo Choo chat */
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}></div>
        <div className={styles.title}>
          <span>Choo Choo Chat</span>
        </div>
        <button onClick={() => setShow(!show)} className={styles.cartButton}>
          <span>Learn More</span>
        </button>
      </div>
      {show && (
        <div className={styles.cover}>
          <div className={styles.popOver}>
            <div className={styles.chooChooImage}></div>
            <div className={styles.chooChooContent}>
              <div className={styles.titleBtn}>
                <b>Choo Choo Chat</b>
              </div>
              <button>
                <a
                  href="https://choo-choo-chat.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                Live Project
              </button>
              <button
                className={styles.closebtn}
                onClick={() => setShow(!show)}
              >
                X
              </button>
              <p className={styles.chooChooP}>
                My app improves communication between CSX Railroad roadmasters
                and contractors. The roadmaster can add roads to a list, and
                contractors will see "preset," "close," and "open" buttons for
                each road. This allows the roadmaster to easily instruct
                contractors on when to prepare, close, or open roads for
                maintenance with a simple button push.
              </p>
              <ul>
                <li>React</li>
                <li>Leaflet</li>
                <li>Supabase</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default projectCard;
