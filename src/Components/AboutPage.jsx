import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import Experience from "./Experience";

const AboutPage = () => {
  return (
    <>
      <div className={styles.boxCard}>
        <div className={styles.aboutMe}>
          <h2 className={styles.aboutTitle}>About Me.</h2>
          <div >
            <p className={styles.aboutMeParagragh}><span>H</span>ey! I'm Ryan McGatha, a passionate software developer with a knack for creating efficient and innovative web applications. My journey in web development began at Carolina Code School, where I completed a comprehensive Full Stack Web Development course, equipping me with a solid foundation in technologies like React.js, Python, and PostgreSQL.</p>
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
