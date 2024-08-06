import styles from "./AboutPage.module.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className={styles.boxCard}>
        <div className={styles.aboutMe}>
          <h2>My Story</h2>
          <div className={styles.p}>
            <p>
              <span>H</span>i, my name is Jaylen and I'm going to tell you my
              story so let's get right into it. So it all started in elementary
              school. I went through school in special classes. Everyone I tell
              that to would always be surprised and say they would have never
              known. Well, that's because I don't have any special needs. So it
              was very embarrassing going to school and having friends that were
              in normal classes, so you can imagine growing up I didn't feel
              very smart.
              <br /> <br /> I went through this from elementary school all the
              way until I graduated high school. By the time I got to high
              school, the classes were not necessarily for special needs but it
              was for kids with learning disabilities. Although I had trouble
              reading and spelling I didn't have a learning disability. I was an
              athlete from elementary school to high school So I had no problem
              having friends but it was still embarrassing that I was never in
              the same class as them.
              <br /> <br /> I grew up with good parents that worked hard to keep
              me out of trouble and keep me focused but they did not know that I
              had the thoughts of not feeling smart or through school. big
              accomplishment was graduating considering it didn't feel like an
              accomplishment because I wasn't challenged going through school.
            </p>
            <hr />
            <h4>The Move To Greenville</h4>
            <p>
              {" "}
              <span>N</span>ow that I have graduated and trying to figure out
              what is next for me I attended college but instantly College was
              not for me. So I dropped out of college and I moved to Greenville
              South Carolina with my dad to work. I also tried to start my
              clothing line where I taught myself how to do graphic design to
              make my designs on my clothing. I liked doing graphic design so
              after a few years of teaching myself I finally decided that I
              needed to attend college I was in college for about two and a half
              years and realized I was learning everything I already knew in
              that job and didn't care about my degree in that field so I
              dropped out I also got burned out from graphic design and decided
              that I will use it as just a hobby. Moving to Greenville was the
              best decision of my life. I learned a lot from a lot of people.
              the biggest lesson that I learned was from my wife whom I met in
              Greenville. She has taught me a lot and brought a lot of new
              things into my life. <br /> <br /> but the biggest change she brought into my
              life was the world of tech. My wife was the very first one and
              told me that I would be good at software development. I didn't
              listen because I still didn't feel smart enough. but I met someone
              who was in the same field and had been doing software development
              for about 6 years and he taught me a little bit of HTML After that
              I joined a foundation course that taught me HTML, CSS, and
              JavaScript., the foundation's course was a confirmation that I
              actually could be good at this. So I joined the cohort and became
              cohort 18. Throughout the class, I felt like I was where I needed
              to be but still wasn't sure if I was going to come out at the end
              of this cohort. but my teacher was a perfect teacher for me. He
              made the class fun to be in and that made it easier to understand
              the languages. The best teacher is a teacher who believes in
              his/her students. My teacher Sean believed in us. <br /> <br /> Throughout the
              cohort, there were ups and downs but I made it to demo day my demo
              day was fantastic I got a lot of good feedback on the app that I
              made Now I am realizing that I am good at software development
              after our demo day the cohort went out for dinner and that is
              where we received our certificate and at this moment I am getting
              my clarity that I am smart And I can be proud of what I've just
              done which is learning six different development languages in only
              3 months I can finally be proud of myself in hold my head high.
            </p>
            <hr />
            <p>
              And that is my story on why becoming Carolina Code
              School cohort 18 has made me the happiest I've ever been other
              than having my very own family.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/projact"}>
          <button className={`${styles.homeProjactBtn} ${styles.experProjact}`}>
            Projects
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/experience"}>
          <button className={`${styles.homeExperBtn} ${styles.experProjact}`}>
            Experience
          </button>
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
