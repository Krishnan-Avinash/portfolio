import React from "react";
import htmlImage from "../../../assets/html-removebg-preview.png";
import cssImage from "../../../assets/css.png";
import jsImage from "../../../assets/js.png";
import reactImage from "../../../assets/react.png";
import tailwindImage from "../../../assets/tailwind-removebg-preview.png";
import chakraImage from "../../../assets/chakra-removebg-preview.png";
import sassImage from "../../../assets/sass.png";
import tsImage from "../../../assets/ts.png";

const IndividualSkills = () => {
  const elements = [
    { image: htmlImage },
    { image: cssImage },
    { image: jsImage },
    { image: tsImage },
    { image: reactImage },
    { image: tailwindImage },
    { image: chakraImage },
    { image: sassImage },
  ];
  return (
    <div className="ind-skill">
      <ul>
        {elements.map((item, index) => (
          <li key={index}>
            <img
              className="skill-imag"
              src={item.image}
              alt={`Skill ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualSkills;
