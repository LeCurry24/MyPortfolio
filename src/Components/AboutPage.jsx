import { useEffect } from "react";
import styles from "./AboutPage.module.css";
import Experience from "./Experience";
import ProgrammingSkills from "./ProgrammingSkills";
import SoftSkills from "./SoftSkills";
import ContactMe from "./ContactMe";
import AboutMeSum from "./AboutMeSum";
import ChooChooChat from "../MyProjects/ChooChooChat";
import RoseGala from "../MyProjects/RoseGala";
import RPG from "../MyProjects/Rpg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({once: true});
  }, []);
  return (
    <>
      <div data-aos="fade-down-right">
        <AboutMeSum />
      </div>
      <div className={styles.allSkills}>
        <div data-aos="fade-down-left" className={styles.ProgrammingSkills}>
          <ProgrammingSkills />
        </div>
        <div data-aos="fade-down-left" className={styles.SoftSkills}>
          <SoftSkills />
        </div>
      </div>

      <div data-aos="fade-down-right">
        <Experience />
      </div>
      <div data-aos="fade-down-left" className={styles.topthreeProjects}>
        <ChooChooChat />
        <RoseGala />
        <RPG />
      </div>
      <div data-aos="fade-down-right">
        <ContactMe />
      </div>
    </>
  );
};

export default AboutPage;
