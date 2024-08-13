import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import Experience from "./Experience";

const AboutPage = () => {
  return (
    <>
      <div className={styles.boxCard}>
        <div className={styles.aboutMe}>
          <h2>About Me</h2>
          <div className={styles.p}>
            <p>about me here</p>
          </div>
        </div>
      </div>
      <div>
        <Experience/>
      </div>
      <div>
        <Link to={"/projact"}>
          <button className={`${styles.homeProjactBtn} ${styles.experProjact}`}>
            Projects
          </button>
        </Link>
      
        <Link to={"/contactMe"}>
          <button className={`${styles.homeExperBtn} ${styles.experProjact}`}>
            Contact Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
