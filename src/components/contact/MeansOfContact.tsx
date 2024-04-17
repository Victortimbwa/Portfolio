import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  TwitterContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:victortimbwa@gmail.com" aria-label="send me an  mail">
          victortimbwa@gmail.com
        </a>
      ),
    },
    {
      icon: <TwitterContactIcon />,
      appText: "Follow me on Twitter",
      appDetails: (
        <a
          href="https://twitter.com/Victor_Timbwa"
          target="_blank"
          rel="noreferrer"
          aria-label="follow me on twitter"
        >
          @Victor_Timbwa
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://linkedin.com/in/victortimbwa"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with me on Linkedin"
        >
          Victor Timbwa
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
