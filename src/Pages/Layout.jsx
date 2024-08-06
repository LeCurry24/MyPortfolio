import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import ExternalButton from "./ExternalButton";
import Linkedin from "./Linkedin";
import HomeBtn from "./HomeBtn";

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
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSg3RnkYPChAjk6DfOl0G2xLW92WegD9aatdHEnTMig9FLCDb0Zo3ykLTzUlbQ4uWFWJkcwDs0TNuET/pub?embedded=true"
            target="_blank"
          >
            <button className={styles.resumeBtn}>My Resume</button>
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
