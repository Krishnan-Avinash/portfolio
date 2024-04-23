import React from "react";
import call from "../../assets/callus2png.png";
import mail from "../../assets/mail2png.png";

const Contact = () => {
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
          <div className="contact-right">
            <div className="contact-right-top">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="number" placeholder="Your Phone" required />
            </div>
            <div className="contact-right-mid">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
              ></textarea>
              {/* <input type="text" placeholder="Your Message" required /> */}
            </div>
            <div className="contact-right-bottom">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
