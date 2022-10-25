import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

import "../Contact/contact.scss";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  email: yup.string().required("Please enter your email."),
  message: yup.string().required("Please enter a message."),
});

const Contact = () => {
  const [contactForm, setContactForm] = useState(initialValues);

  const [contactErrors, setContactErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  // validate function
  const validate = (e) => {
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => setContactErrors({ ...contactErrors, [e.target.name]: "" }))
      .catch((err) =>
        setContactErrors({ ...contactErrors, [e.target.value]: err.errors })
      );
  };

  // change function
  const onChange = (e) => {
    setContactForm({ [e.target.name]: e.target.value });
    validate(e);
  };

  // const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwnukco",
        "contact_form",
        form.current,
        "lajuMBbv1vpgraQXV"
      )
      .then(
        (res) => {
          alert("Message successfully sent!");
          window.location.reload(false);
          console.log(res.text, "Success!");
        },
        (err) => {
          alert("Failed to send the message, please try again.");
          console.log(err.text, "Failed...");
        }
      );
    console.log(form);
  };

  useEffect(() => {
    console.log("Hello");
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={initialValues.name}
                  onChange={onChange}
                />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={initialValues.email}
                  onChange={onChange}
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  defaultValue={initialValues.message}
                  onChange={onChange}
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
