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
  name: yup.string().required("Please enter your name.").min(3),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Please enter your email."),
  message: yup.string().required("Please enter a message.").min(20),
});

const Contact = () => {
  // const form = useRef();

  const [contactForm, setContactForm] = useState(initialValues);

  const [contactErrors, setContactErrors] = useState(initialValues);

  const [isValid, setIsValid] = useState(true);

  // const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwnukco",
        "contact_form",
        contactForm,
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
    // console.log(form);
  };

  // validate function
  const validate = (e) => {
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setContactErrors({ ...contactErrors, [e.target.name]: "" });
        setIsValid(valid);
      })
      .catch((err) => {
        console.log(err.errors);
        setContactErrors({ ...contactErrors, [e.target.value]: err.errors[0] });
      });

    console.log(contactErrors);
  };

  // change function
  const onChange = (e) => {
    validate(e);
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    schema.isValid(contactForm).then((valid) => setIsValid(!valid));
  }, [contactForm]);

  // useEffect(() => {
  //   console.log(contactErrors.name);
  // }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="contact-form">
          <form onSubmit={sendEmail}>
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

              <div>{contactErrors.name}</div>

              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={initialValues.email}
                  onChange={onChange}
                />
              </li>
              {contactErrors.email.length > 0 ? (
                <p>{contactErrors.email}</p>
              ) : null}
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  defaultValue={initialValues.message}
                  onChange={onChange}
                ></textarea>
              </li>
              {contactErrors.message.length > 0 ? (
                <p>{contactErrors.message}</p>
              ) : null}
              {/* <li>
                <input type="submit" className="flat-button" />
              </li> */}
            </ul>
            <button disabled={!isValid} type="button" className="flat-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
