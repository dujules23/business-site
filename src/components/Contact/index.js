import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "../Contact/contact.scss";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.prevenDefault();

    emailjs
      .sendForm("gmail", "contact_form", refForm.current, "lajuMBbv1vpgraQXV")
      .then(
        () => {
          alert("Message successfully sent!");
          // window.location.reload(false);
          console.log("Success!");
        },
        () => {
          alert("Failed to send the message, please try again.");
          console.log("Failed...");
        }
      );
  };

  console.log(refForm);
  return (
    <>
      <div className="container contact-page">
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
