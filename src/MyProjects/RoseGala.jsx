import React from "react";
import styles from "./Projacts.module.css";

const roseGala = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image2}></div>
      <div className={styles.content}>
        <h3 className={styles.h3}>Rose Gala</h3>
        {/* <a href=" " target="_blank">
          <span className={styles.title}>Live Profect</span>
        </a> */}
        <b>Comming Soon</b>
        <p className={styles.roseGalaP}>
          At Rose Gala, we believe that art is not only for viewing but for
          experiencing. That's why we offer features that let you actively
          engage with the artwork. Cast your vote for your favorite pieces,
          explore the top picks selected by the community, and curate your
          personal collection of favorite art. Whether you're an art aficionado
          or just discovering your artistic tastes, Rose Gala invites you to
          connect with art in a way that's both interactive and inspiring.
        </p>
        <div>
          <ul className={styles.tag}>
            <li class={styles.tagName}>React</li>
            <li class={styles.tagName}>FastApi</li>
            <li class={styles.tagName}>typeScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default roseGala
