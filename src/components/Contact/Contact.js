import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  ContactContainer,
  ContactForm,
  FormInput,
  SubmitBtn,
} from "./Contact.styled";
import triangle from "../../assets/triangle.png";
import greenTriangle from "../../assets/triangle-green.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [err, setErr] = useState({});

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }
    if (event.target.name === "email") {
      console.log(email);
      setEmail(event.target.value);
    }
    if (event.target.name === "message") {
      setMessage(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let err = {};

    if (!name.trim()) {
      err.name = "Name is not valid";
    }
    if (!email) {
      err.email = "Email is not valid";
    }
    if (!message) {
      err.message = "Message should not be empty";
    }

    if (Object.keys(err).length === 0) {
      setErr([]);
      sendEmail(event);
    } else {
      setErr(err);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${[process.env.REACT_APP_SERVICE_ID]}`,
        `${[process.env.REACT_APP_TEMPLATE_ID]}`,
        e.target,
        `${[process.env.REACT_APP_USER_ID]}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
          setMessageSent(
            "Form submitted successfully. I will contact you soon!"
          );
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setMessageSent("There was an error. Please try again.");
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <img src={triangle} className="blue" />
      <img src={greenTriangle} className="green" />
      <h1>Contact Me</h1>
      <ContactForm>
        <form onSubmit={handleSubmit}>
          <FormInput>
            <div className="label">
              <label>Name:</label>
            </div>

            <input
              value={name}
              type="text"
              name="name"
              id="name"
              className={err.name && "show-error"}
              placeholder={err.name ? err.name : "Enter your name . . ."}
              onChange={handleChange}
            />
          </FormInput>

          <FormInput>
            <div className="label">
              <label>Email:</label>
            </div>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              className={err.email && "show-error"}
              placeholder={err.email ? err.email : "Enter your email . . ."}
              onChange={handleChange}
            />
          </FormInput>

          <FormInput>
            <div className="label">
              <label>Message:</label>
            </div>
            <textarea
              value={message}
              name="message"
              id="message"
              className={err.message && "show-error"}
              placeholder={
                err.message ? err.message : "Enter your message . . ."
              }
              onChange={handleChange}
            />
          </FormInput>
          {messageSent && <div className="submit-result">{messageSent}</div>}
          <SubmitBtn type="submit">Send</SubmitBtn>
        </form>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
