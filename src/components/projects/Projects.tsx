import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Teleafia",
    description:
      " Teleafya is an online platform built with React, Node and Express. This platform seeks to bridge the gap between doctors and patients, descentralized patients medical records and inaccessibility to pharmaceutical services",
   image:
      "https://res.cloudinary.com/difjkimdu/image/upload/c_pad,b_gen_fill,w_499,h_887,ar_9:16/v1713334317/3796679_ymnvwb.jpg",
    url: "https://telafya.com",
  },
  {
    name: "UI/UX",
    description:
      "This is my first UI/UX design project",
    image:
      "https://res.cloudinary.com/difjkimdu/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1713334756/psc_images_jij04m.png",
    url: "https://www.figma.com/file/e0S6wyWJYXAAmmlUBSADUC/Untitled?type=design&node-id=0%3A1&mode=design&t=bNEaZG3mEnehgmOT-1",
  }
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
