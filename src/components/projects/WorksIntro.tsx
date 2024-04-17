import { useContext } from "react";
import { ThemeContext } from "../../App";

interface WorksIntroProps {}

const WorksIntro: React.FunctionComponent<WorksIntroProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "introWrapperDark" : "introWrapper"}>
      <div className="flexWks">
        <div className="textsintro">
          <p className={theme.isDarkmode ? "intTrextDark" : "intTrext"}>
            Currently I am a frontend developers lead at E&M TECH supervising a team of six for the project.
          </p>
          <p className={theme.isDarkmode ? "belDark" : "bel"}>
            View selected projects below
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/difjkimdu/image/upload/v1713333554/favicon_gmyvao.jpg"
          alt="Victor timbwa"
        />
      </div>
    </div>
  );
};

export default WorksIntro;
