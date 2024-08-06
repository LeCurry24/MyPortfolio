import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3teawbm", "template_7sl7gki", form.current, {
        publicKey: "n9IMfhkKgGIMPdrqZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div className={styles.contactCard}>
        <h3>Contact Me</h3>
        <label className={styles.label}>Name</label>
        <input type="text" name="user_name" className={styles.input} />
        <label className={styles.label}>Email</label>
        <input type="email" name="user_email" className={styles.input} />
        <label className={styles.label}>Message</label>
        <textarea name="message" className={styles.input} />
        <div>
        <button type="submit" value="Send" className={styles.button}>
          send
        </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
