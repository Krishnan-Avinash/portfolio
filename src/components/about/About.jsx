import React from "react";
import img from "../../assets/about.jpeg";

const About = () => {
  return (
    <>
      <div className="about-parent">
        <div className="about-left">
          <img src={img} alt="Image" />
        </div>
        <div className="about-right">
          <h2>ABOUT ME</h2>
          <h1>Front-end Developer </h1>
          <h4>
            Hey, my name is Avinash, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users.
          </h4>
          <h4>
            My main stack currently is Reactjs in combination with SCSS and
            JavaScript.
          </h4>
        </div>
      </div>
    </>
  );
};

export default About;
