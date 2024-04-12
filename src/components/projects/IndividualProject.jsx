import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndividualProject = ({
  img,
  vid,
  title,
  desc,
  liveLink,
  gitLink,
  ind,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="indiv-project">
      <div
        className="indiv-proj-left"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <video
            src={vid}
            autoPlay
            controls
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <img
            src={img}
            alt="Project Image"
            className="image"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div className="indiv-proj-right">
        <h1>
          {ind + 1}. {title}{" "}
        </h1>
        <h3>{desc}</h3>
        <div className="links">
          <button className="indiv-proj-right-btn">
            <Link target="_blank" to={liveLink}>
              Live Demo
            </Link>
          </button>
          <button className="indiv-proj-right-btn">
            <Link target="_blank" to={gitLink}>
              Code
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
