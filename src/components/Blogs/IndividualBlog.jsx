import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndividualBlog = ({ img, title, desc, liveLink, ind }) => {
  return (
    <div className="indiv-blog">
      <div className="indiv-blog-left">
        <img
          src={img}
          alt="Project Image"
          className="blog-image"
          style={{ width: "90%", height: "90%" }}
        />
      </div>
      <div className="indiv-blog-right">
        <h1>
          {ind + 1}. {title}{" "}
        </h1>
        <h3>{desc}</h3>
        <div className="links">
          <button className="indiv-blog-right-btn">
            <Link target="_blank" to={liveLink}>
              Blog Link
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
