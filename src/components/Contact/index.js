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
  // right now this is the only way to get the email to work, commented out for form validation testing
  const form = useRef();

  const [contactForm, setContactForm] = useState(initialValues);

  const [contactErrors, setContactErrors] = useState({});

  const [disabled, setDisabled] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwnukco",
        "contact_form",
        // put form.current here to get email to send (for now)
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
    // console.log(form);
  };

  // validate function
  const validate = (e) => {
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setContactErrors({ ...contactErrors, [e.target.name]: "" });
        // setDisabled(valid);
      })
      .catch((err) => {
        // console.log(err.errors);
        setContactErrors({ ...contactErrors, [e.target.name]: err.errors[0] });
      });
  };

  // change function
  const onChange = (e) => {
    validate(e);
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    schema.isValid(contactForm).then((valid) => setDisabled(!valid));
  }, [contactForm]);

  return (
    <>
      <div className="container contact-page">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={initialValues.name}
                  onChange={onChange}
                />
                <div>{contactErrors.name}</div>
              </li>

              <li className="half">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={initialValues.email}
                  onChange={onChange}
                />
                <div>{contactErrors.email}</div>
              </li>

              <li>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  defaultValue={initialValues.message}
                  onChange={onChange}
                ></textarea>
                <div>{contactErrors.message}</div>
              </li>

              {/* <li>
                <input type="submit" className="flat-button" />
              </li> */}
            </ul>
            <button type="submit" className="flat-button" disabled={disabled}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
