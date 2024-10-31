import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.homePage}>
      {/* <img className={styles.aboutPhoto} src="./HomePhoto.jpg" alt="" /> */}
      <h1 className={styles.h1}>Hi, I'm Jaylen Curry.<br /><span className={styles.imA}>I'm a </span><span className={styles.fullDev}>Full Stack Developer</span></h1>
      <p>
        I specialize in building dynamic and responsive web applications using
        technologies<br></br>like React.js, and PostgreSQL. Explore my projects and get
        to know more about my work.
      </p>
      <Link to={"/about"}>
        <button className={styles.button}>Learn more about me</button>
      </Link>
      <div className={styles.photo1}></div>
      <div className={styles.photo2}></div>
      
    </div>
  );
};

export default Home;
