import styles from "./Exper.module.css";



const LaFilmSchool = () => {
  return (
      <div className={styles.experienceDiv}>
      {/* experience card */}
      <div className={styles.laFilm}>
        <div className={styles.expInfo}>
          <div>
            <div className={styles.schoolDate}>
            <h3>Los Angeles Film School</h3>
            <p className={styles.p}>Feb 2020 - May 2022</p>
            </div>
            <div className={styles.experDate}>
            <p className={styles.fullStack}>Graphic Design</p>
            <p className={styles.p}>Los Angeles,</p>
            </div>
            <p className={styles.p}>
                <ul>
                    <li>Mastered the fundamentals of creating pleasing and effective graphic design.</li>
                    <li>Learned to implement Adobe (Photoshop, Illustrator, AfterEffects) into professional-grade work.</li>
                </ul>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaFilmSchool