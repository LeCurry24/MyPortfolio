import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import ExternalButton from "./ExternalButton";
import Linkedin from "./Linkedin";
import HomeBtn from "./HomeBtn";
import ContactBtn from "./contactBtn";

const Layout = () => {
  return (
    <>
      <div className={styles.socials}>
        <div className={styles.leftSideBar}>
          <Link to={"/"}>
            <button className={styles.button}>
              <HomeBtn />
            </button>
          </Link>
          <button className={styles.button}>
            <ExternalButton />
          </button>
          <button className={styles.button}>
            <Linkedin />
          </button>
        </div>
        <div>
          <Link to={"/projact"}>
            <button className={styles.resumeBtn}>Projects</button>
          </Link>
          <Link to={"/myStory"}>
            <button className={styles.resumeBtn}>My Story</button>
          </Link>
          <Link to={"/resume"}>
            <button className={styles.resumeBtn}>My Resume</button>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
