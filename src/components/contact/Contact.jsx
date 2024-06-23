import React, { useState } from "react";
import call from "../../assets/callus2png.png";
import mail from "../../assets/mail2png.png";

import axios from "axios";

import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [num, setNum] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      number: num,
      message: message,
    };

    const response = await axios.post(
      "https://portfolio-backend-g6av.onrender.com/api/portfolio/add",
      formData
    );
    if (response.data.success) {
      toast({
        title: "Successful..!!",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
    } else {
      toast({
        title: "Some Error Occured.",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-main">
          <div className="contact-left">
            <section className="contact-left-top">
              <section className="contact-left-top-one">
                <img src={call} alt="Err" />
                <h2>Mobile Number</h2>
              </section>
              {/* <p className="removeCall">We are available 24/7</p> */}
              <p>Phone: +91 8373927883</p>
            </section>
            <section className="contact-left-bottom">
              <div className="contact-left-bottom-one">
                <img src={mail} alt="Err" />
                <h2>Email Address</h2>
              </div>
              {/* <p className="removeMail">
                Fill out the form and we will contact you within 24 hours
              </p> */}
              <p> avinash.krishnan1605@gmail.com</p>
            </section>
          </div>
          <form className="contact-right" onSubmit={onSubmitHandler}>
            <div className="contact-right-top">
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Your Phone"
                onChange={(e) => setNum(e.target.value)}
                required
              />
            </div>
            <div className="contact-right-mid">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {/* <input type="text" placeholder="Your Message" required /> */}
            </div>
            <div className="contact-right-bottom">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
