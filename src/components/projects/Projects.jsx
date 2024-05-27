import React from "react";
import proj1 from "../../assets/project1Img.jpg";
import proj2 from "../../assets/proj21.jpg";
import proj1Vid from "../../assets/proj1Trim2.mov";
import proj2Vid from "../../assets/proj2Trim.mp4";
import IndividualProject from "./IndividualProject";
import { Element } from "react-scroll";

const Projects = () => {
  const proj = [
    {
      img: proj2,
      vid: proj2Vid,
      title: "OneClickMart",
      desc: "OneClickMart, a highly responsive, user-friendly e-commerce platform using React and Chakra UI, featuring dynamic shopping functionalities.",
      liveLink: "https://oneclickmart.netlify.app/",
      gitLink: "hhttps://github.com/Krishnan-Avinash/OneClickMart",
      id: 1,
    },
    {
      img: proj1,
      vid: proj1Vid,
      title: "UsabilityHub",
      desc: "Usabilityhub is an online platform whose frontend is cloned from their original webdesign and a new backend is developed  for users to upload and share website templates.  Need assistance? Our integrated chatbox powered by emailJS is there to help.",
      liveLink: "https://designusability.netlify.app/",
      gitLink: "https://github.com/Krishnan-Avinash/design-website",
      id: 2,
    },
    // {
    //     img: { proj1 },
    //   title: "Trident Works",
    //   desc: "This is ",
    //   liveLink:"https://designusability.netlify.app/",
    //   gitLink:"https://github.com/Krishnan-Avinash/design-website"
    // }
  ];
  return (
    <div className="indiv-main">
      <h1 className="proj-heading">
        <Element name="projects">PROJECTS</Element>
      </h1>
      <ul>
        {proj.map((item, index) => (
          <li key={item.id}>
            <IndividualProject
              ind={index}
              img={item.img}
              vid={item.vid}
              title={item.title}
              desc={item.desc}
              liveLink={item.liveLink}
              gitLink={item.gitLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
