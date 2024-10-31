import styles from "./Exper.module.css";
import LaFilmSchool from "./LaFilmSchool";



const Experience = () => {
  return (
      <div className={styles.experienceDiv}>
      {/* experience card */}
      <div className={styles.expCard}>
        <div className={styles.expInfo}>
          <div>
            <hr />
          <h2 className={styles.experience}>Experience.</h2>
            <div className={styles.schoolDate}>
            <h3>Carolina Code School</h3>
            <p className={styles.p}>March 2024 - July 2024</p>
            </div>
            <div className={styles.experDate}>
            <p className={styles.fullStack}>Full Stack Web Development Student</p>
            <p className={styles.p}>Greenville, SC</p>
            </div>
            <p className={styles.p}>
              Completed a rigorous full-stack web development program, gaining
              proficiency in technologies such as React.js, PostgreSQL, and
              Tailwind CSS. Engaged in hands-on projects simulating real-world
              software development challenges.
            </p>
            <p className={styles.lage}>
              Python, HTML, CSS, JavaScript, React.js, PostgreSQL, FastApi.{" "}
            </p>
            <hr />
            {/* <LaFilmSchool/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience
