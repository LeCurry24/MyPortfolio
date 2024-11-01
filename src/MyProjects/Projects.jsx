import ProjectsCard from "./ChooChooChat";
import RoseGala from "./RoseGala";
import RPG from "./Rpg";
import styles from "./Projacts.module.css"

const Profect = () => {
  return (
    <div className={styles.projectPage}>
      <div className={styles.chooDiv}>
        <ProjectsCard />
      </div>
      <div className={styles.galaDiv}>
        <RoseGala />
      </div>
      <div className={styles.RpgDiv}>
        <RPG/>
      </div>
      
    </div>
  );
};

export default Profect;
