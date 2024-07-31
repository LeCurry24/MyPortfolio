import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.homePage}>
        <h1>Hi, I'm  Jaylen Curry, Full Stack Developer</h1>
        <p>I specialize in building dynamic and responsive web applications using technologies like React.js, and PostgreSQL. Explore my projects and get to know more about my work.</p>
        <button className={styles.button}>Learn more about me</button>

    </div>
  );
};

export default Home;
