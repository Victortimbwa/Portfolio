import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://res.cloudinary.com/difjkimdu/image/upload/v1713333554/favicon_gmyvao.jpg"
          alt="victor timbwa"
        />
        <div className="details">
          <AnimatedText
            text="Meet Victor Timbwa."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a passionate frontend Developer and UI/UX designer based in Nairobi, Kenya. I have passion
            in building eye catching products and solutions that would not only solve problems but also easy for
            users to interact with.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Over the past 1 year I have worked on an online platform that bridges the gap between healthcare
            providers and patients. The solution solves the challenges of universal health coverage, descentralized
            patients health records and inaccessibility of pharmaceuticals and medical services.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            My hobbies are adventuring and reading books. I love fiction, motivational and philosophy genres. I can't explain
            my love for sports. I am a formula 1 enthusiast and also love football.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
