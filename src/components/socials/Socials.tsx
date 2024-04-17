import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/Victortimbwa"
        target="_blank"
        rel="noreferrer"
        aria-label="link to my github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://instagram.com/victor_timbwa"
        target="_blank"
        rel="noreferrer"
        aria-label="link to my instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://twitter.com/Victor_Timbwa"
        target="_blank"
        rel="noreferrer"
        aria-label="link to my twitter account"
      >
        <TwitterIcon />
      </a>
      <a
        className="socialIcons"
        href="https://linkedin.com/in/victor_timbwa"
        target="_blank"
        rel="noreferrer"
        aria-label="link to  linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
