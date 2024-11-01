import React, { useState } from "react";
import styles from "./Projacts.module.css";

const roseGala = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.roseGalaImage}></div>
        <div className={styles.title}>
          <span>Rose Gala</span>
        </div>
        <button onClick={() => setShow(!show)} className={styles.cartButton}>
          <span>Learn More</span>
        </button>
      </div>
      {show && (
        <div className={styles.cover}>
          <div className={styles.popOver}>
            <div className={styles.galaImage}></div>
            <div className={styles.chooChooContent}>
              <div className={styles.titleBtn}>
                <b>Rose Gala</b>
              </div>
              <button>
                <a href="" target="_blank" rel="noopener noreferrer"></a>
                Coming Soon
              </button>
              <button
                className={styles.closebtn}
                onClick={() => setShow(!show)}
              >
                X
              </button>
              <p className={styles.chooChooP}>
                At Rose Gala, we believe that art is not only for viewing but
                for experiencing. That's why we offer features that let you
                actively engage with the artwork. Cast your vote for your
                favorite pieces, explore the top picks selected by the
                community, and curate your personal collection of favorite art.
                Whether you're an art aficionado or just discovering your
                artistic tastes, Rose Gala invites you to connect with art in a
                way that's both interactive and inspiring.
              </p>
              <ul>
                <li>React</li>
                <li>Supabase</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default roseGala;
