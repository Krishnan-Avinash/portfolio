import React from "react";
import image from "../../../assets/image.jpg";
import li from "../../../assets/linkedin2.jpg";
import git from "../../../assets/github3.jpg";
import Skills from "../SkillSection/Skills";
import { Link } from "react-router-dom";
import About from "../../about/About";
import Projects from "../../projects/Projects";
// import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <main className="main-parent">
      <div className="main-section">
        <div className="left">
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm Palaghat Murali Krishnan Avinash. A passionate Full-Stack
            Developer.
          </p>
          <ul>
            <li>
              <Link to="https://www.linkedin.com/in/avinashkrishnan1/">
                <img src={li} alt="LinkedIn" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/Krishnan-Avinash">
                <img src={git} alt="Github" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <img src={image} alt="image" />
        </div>
      </div>
      <Skills />
      <Projects />
      {/* <About /> */}
      {/* <Outlet /> */}
    </main>
  );
};

export default MainSection;
