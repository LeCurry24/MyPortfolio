import React from "react";
import styles from "./Projacts.module.css";

const projectCard = () => {
  return (
    /* Choo Choo chat */
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h3>
          Choo Choo Chat
        </h3>
        <a href="https://choo-choo-chat.netlify.app/" target="_blank">
          <span className={styles.title}>Live Profect</span>
        </a>

        <div>
          <ul className={styles.tag}>
            <li class={styles.tagName}>React</li>
            <li class={styles.tagName}>Leaflet</li>
            <li class={styles.tagName}>supabase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
