import { useEffect } from "react";
import ProjectsCard from "./ChooChooChat";
import RoseGala from "./RoseGala";
import RPG from "./Rpg";
import styles from "./Projacts.module.css"
import Aos from "aos";
import "aos/dist/aos.css";


const Profect = () => {
  useEffect(() =>{
    Aos.init();
  }, [])
  return (
    <div className={styles.projectPage}>
      <div  className={styles.chooDiv}>
        <ProjectsCard />
      </div>
      <div  className={styles.galaDiv}>
        <RoseGala />
      </div>
      <div  className={styles.RpgDiv}>
        <RPG/>
      </div>
      
    </div>
  );
};

export default Profect;
