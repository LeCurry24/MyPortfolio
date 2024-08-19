import styles from "./Skills.module.css";


const SoftSkills = () => {
  return (
    <div className={styles.bgblue}>
      <div className={styles.card}>
        <h5>Soft Skills </h5>
        <ul className={styles.skills}>
          <li>Self-starter</li>
          <li>People-centric</li>
          <li>Team collaboration</li>
          <li>Effective communication</li>
          <li>Adaptability</li>
          <li>Problem-solving</li>
          <li>Leadership</li>
          <li>Time management</li>
        </ul>
      </div>
    </div>
  );
};


export default SoftSkills