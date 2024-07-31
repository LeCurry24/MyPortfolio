import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.aboutMe}>
      <img className={styles.aboutPhoto} src="./HomePhoto.jpg" alt="" />
      <div>
      <h2>about me</h2>
      <p>my about me will be here</p>
      <p>socials will go here</p>
      </div>
    </div>
  );
};

export default Home;