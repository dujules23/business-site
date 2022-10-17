import React from "react";

import {
  ContactForm,
  FormList,
  FormItem,
  FormInput,
  FormMessage,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactForm>
        <FormList>
          <li>
            <FormInput type="text" name="name" placeholder="name" required />
          </li>
          <li>
            <FormInput type="email" name="email" placeholder="email" required />
          </li>
          <li>
            <FormMessage
              placeholder="Message"
              name="message"
              required
            ></FormMessage>
          </li>
        </FormList>
      </ContactForm>
    </>
  );
};

export default Contact;
