import React from "react";
import blog1 from "../../assets/blog12.jpg";
import blog2 from "../../assets/blog22.jpg";
import IndividualBlog from "./IndividualBlog";

const Blog = () => {
  const blog = [
    {
      img: blog1,
      title: "EmailJS Integration",
      desc: "Check out my blog for a concise guide on integrating EmailJS, enabling you to send emails directly from your website without needing a server, and boosting user engagement with ease.",
      liveLink:
        "https://dev.to/avinash_krishnan/template-exchange-instant-support-emailjs-integration-4p8f",
      id: 1,
    },
    {
      img: blog2,
      title: "Add To Cart Feature",
      desc: "Dive into my latest blog where I break down how to implement an Add to Cart feature using React and Redux Toolkit.",
      liveLink:
        "https://dev.to/avinash_krishnan/add-to-cart-feature-in-react-with-redux-toolkit-24f7",
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
    <div className="indivBlog-main">
      <h1 className="blog-heading">BLOGS</h1>
      <ul>
        {blog.map((item, index) => (
          <li key={item.id}>
            <IndividualBlog
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

export default Blog;
