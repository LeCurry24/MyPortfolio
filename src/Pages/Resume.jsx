import styles from "./Resume.module.css"

const Resume = () => {
  return (
    <div className={styles.resumeStyle}>
      <iframe
        src="./JaylenResume.pdf#zoom=100"
        width="80%"
        height="1150px"
        style={{ border: "none" }}
        title="Jaylen Curry - Resume"
      >
        Your browser does not support iframes. Contact me for copy of resume.
      </iframe>
    </div>
  );
};

export default Resume;
