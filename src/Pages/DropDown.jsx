import styles from "./DropDown.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ExternalButton from "./ExternalButton";
import Linkedin from "./Linkedin";

const DropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showContent = () => setMenuOpen(!menuOpen);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.menu} onClick={showContent}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen ? (
          <>
            <ul>
              <li>
                <button className={styles.dropBtn}>
                  <ExternalButton />
                </button>
              </li>
              <li>
                <button className={styles.dropBtn}>
                  <Linkedin />
                </button>
              </li>
              <li>
                <Link to={"/projact"}>
                  <button className={styles.dropBtn}>Projects</button>
                </Link>
              </li>
              <li>
                <Link to={"/myStory"}>
                  <button className={styles.dropBtn}>My Story</button>
                </Link>
              </li>
              <li>
                <Link to={"/resume"}>
                  <button className={styles.dropBtn}>My Resume</button>
                </Link>
              </li>
            </ul>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default DropDown;
