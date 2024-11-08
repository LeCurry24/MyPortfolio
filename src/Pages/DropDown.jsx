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
                <button><ExternalButton/></button>
              </li>
              <li>
                <button><Linkedin/></button>
              </li>
              <li>
              <Link to={"/projact"}>
            <button className={styles.resumeBtn}>Projects</button>
          </Link>
              </li>
              <li>
              <Link to={"/myStory"}>
            <button className={styles.resumeBtn}>My Story</button>
          </Link>
              </li>
              <li>
              <Link to={"/resume"}>
            <button className={styles.resumeBtn}>My Resume</button>
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
