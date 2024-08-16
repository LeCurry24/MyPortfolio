import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.css";
import { Toaster, toast} from "react-hot-toast";

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
          toast.success("Successfully toasted!");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("This didn't work.")
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div className={styles.contactCard}>
        <h3 className={styles.text}>Contact Me</h3>
        <label className={styles.label}>Name</label>
        <input type="text" name="user_name" className={styles.input} />
        <label className={styles.label}>Email</label>
        <input type="email" name="user_email" className={styles.input} />
        <label className={styles.label}>Message</label>
        <textarea name="message" className={styles.input} />
        <div>
          <Toaster position="top-center" reverseOrder={false} />
          <button type="submit" value="Send" className={styles.button}>
            send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
