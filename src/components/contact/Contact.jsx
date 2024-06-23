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
      setName("");
      setEmail("");
      setNum("");
      setMessage("");
    } else {
      toast({
        title: "Some Error Occured.",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    }
  };

  const numCheck = (e) => {
    setNum(e.target.value.slice(0, 10));
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
              <p>Phone: +91 8373927883</p>
            </section>
            <section className="contact-left-bottom">
              <div className="contact-left-bottom-one">
                <img src={mail} alt="Err" />
                <h2>Email Address</h2>
              </div>
              <p> avinash.krishnan1605@gmail.com</p>
            </section>
          </div>
          <form className="contact-right" onSubmit={onSubmitHandler}>
            <div className="contact-right-top">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Your Phone"
                value={num}
                onChange={(e) => numCheck(e)}
                required
              />
            </div>
            <div className="contact-right-mid">
              <textarea
                name="message"
                id="message"
                value={message}
                placeholder="Your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
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
