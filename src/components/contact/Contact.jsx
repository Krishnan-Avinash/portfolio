import React, { useState, useRef } from "react";
import call from "../../assets/callus2png.png";
import mail from "../../assets/mail2png.png";

import axios from "axios";

import { useToast } from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
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

    //--------EMAILJS--------
    emailjs.sendForm("service_x1j9p7o", "template_co08m1q", form.current, {
      publicKey: "pxWtMsZz3fDp-EbC7",
    });
  };

  const checkName = (e) => {
    let p1 = e.target.value.slice(0, 1).toUpperCase();
    let p2 = e.target.value.slice(1, e.target.value.length);
    setName(p1 + p2);
  };

  const checkMessage = (e) => {
    let p1 = e.target.value.slice(0, 1).toUpperCase();
    let p2 = e.target.value.slice(1, e.target.value.length);
    setMessage(p1 + p2);
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
          <form ref={form} className="contact-right" onSubmit={onSubmitHandler}>
            <div className="contact-right-top">
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                onChange={(e) => checkName(e)}
                value={name}
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
                onChange={(e) => checkMessage(e)}
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
