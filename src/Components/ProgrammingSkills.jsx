import styles from "./Skills.module.css";

const ProgrammingSkills = () => {
  return (
    <div className={styles.bgblue}>
      <div className={styles.card}>
        <h5>Programming Skills </h5>
        <ul className={styles.skills}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>React</li>
          <li>SQL</li>
          <li>RestfulAPI</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
