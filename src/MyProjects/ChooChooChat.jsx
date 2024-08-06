import React from "react";
import styles from "./Projacts.module.css";

const projectCard = () => {
  return (
    /* Choo Choo chat */
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h3 className={styles.h3}>Choo Choo Chat</h3>
        <a href="https://choo-choo-chat.netlify.app/" target="_blank">
          <span className={styles.title}>Live Profect</span>
        </a>
        <p>
          My app improves communication between<br></br> CSX Railroad roadmasters and
          contractors.<br></br> The roadmaster can add roads to a list, and<br></br> contractors
          will see "preset," "close," and "open" <br></br>buttons for each road. This
          allows the roadmaster<br></br> to easily instruct contractors on when to
          prepare, close,<br></br> or open roads for maintenance with a simple button
          push.
        </p>
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