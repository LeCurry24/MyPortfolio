import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";

const AboutMeSum = () => {
  return (
    <div className={styles.centerDiv}>
      <div className={styles.boxCard}>
        <div className={styles.aboutMe}>
          <h2 className={styles.aboutTitle}>About Me.</h2>
          <div>
            <p className={styles.aboutMeParagragh}>
              <span className={styles.span}>H</span>ey! I'm Jaylen Curry, a
              dedicated Full-stack Software Engineer from Greenville, SC. My
              tech journey began with a challenging 12-week immersive boot camp
              at Carolina Code School, where I gained practical experience in
              HTML, CSS, JavaScript, React, Python, SQL, and FastAPI. This
              strong foundation enabled me to create several early projects,
              including a terminal-based luxury car RPG and an interactive movie
              database application.
            </p>
            <p className={styles.aboutMeParagragh}>
              These experiences lead to the development of my full-stack final
              project, Choo Choo Chat (CCT), which I designed independently to
              enhance communication between railway contractors and roadmasters
              using React, Supabase, and other newly acquired skills.
              Additionally, I have a robust background in web development and
              database management, with proficiency in tools like VSCode,
              GitHub, and Google Suite.
            </p>
            <p className={styles.aboutMeParagragh}>
              Before transitioning into software development, I honed my skills
              in customer service and project management through roles such as a
              server at Ink & Ivy and a traffic controller supervisor at
              Benchmark. These experiences provided me with a unique perspective
              and strong problem-solving abilities that I bring to every coding
              challenge.
            </p>
            <p className={styles.aboutMeParagragh}>
              Beyond my technical expertise, I have a deep appreciation for
              aesthetic design and user experience, which I developed during my
              time at the Los Angeles Film School. This background allows me to
              approach frontend development with both a technical and creative
              mindset, ensuring that the applications I build are not only
              functional but also visually appealing.
            </p>
            <Link to={"/projact"}>
              <button className={styles.customBtn}>Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSum;
