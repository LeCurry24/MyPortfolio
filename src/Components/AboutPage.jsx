import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import ProgrammingSkills from "./ProgrammingSkills";
import SoftSkills from "./SoftSkills";
import ContactMe from "./ContactMe";
import AboutMeSum from "./AboutMeSum";
import ChooChooChat from "../MyProjects/ChooChooChat"
import RoseGala from "../MyProjects/RoseGala"
import RPG from "../MyProjects/Rpg"

const AboutPage = () => {
  return (
    <>
      <div>
        <AboutMeSum/>
      </div>
      <div className={styles.allSkills}>
        <div className={styles.ProgrammingSkills}>
        <ProgrammingSkills/>
        </div>
        <div className={styles.SoftSkills}>
        <SoftSkills/>
        </div>
      </div>
      
      <div>
        <Experience />
      </div>
      <div className={styles.topthreeProjects}>
        <ChooChooChat/>
        <RoseGala/>
        <RPG/>
      </div>
        
          <ContactMe/>
    </>
  );
};

export default AboutPage;
