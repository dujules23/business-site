import React from "react";
// import "../../styles/index.scss";
import "../Contact/contact.scss";

// import {
//   ContactForm,
//   FormList,
//   FormItem,
//   FormInput,
//   FormMessage,
// } from "./ContactElements";

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="contact-form">
          <form>
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
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
