import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <button className={styles.backHomeBtn}>Back Home</button>
        </Link>
      </div>
      
        <div className={styles.boxCard}>
          <div className={styles.aboutMe}>
            <h2>About Me</h2>
            <div>
              <p>my about me will be here</p>
            </div>
          </div>
        </div>
      
      {/* experience card */}
      
        <div className={styles.expCard}>
          <div className={styles.expInfo}>
            <h2>Experience</h2>
            <div>
              <p>Carolina Code School</p>
              <p>Full Stack Web Development Student</p>
              <p>March 2024 - July 2024</p>
              <p>
                Completed a rigorous full-stack web development program, gaining
                proficiency in technologies such as React.js, PostgreSQL, and
                Tailwind CSS. Engaged in hands-on projects simulating real-world
                software development challenges.
              </p>
              <p>
                Python, HTML, CSS, JavaScript, React.js, PostgreSQL, FastApi.{" "}
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default AboutPage;
