import React, { useState } from "react";
import styles from "../styles/contact.module.scss";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    let details = {
      name: name,
      email: email,
      message: message,
    };
    let response = await fetch("/auth/message-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    setSent(true);
    let result = await response.json();
    toast.success(
      "Message sent successfuly, We'll contact you as soon as possible"
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          id="name"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          id="email"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="message"
          className={styles.textarea}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        {status}
      </button>
      {sent ? <p style={{color: 'green'}}>Message sent successfuly</p> : ""}
    </form>
  );
};

export default ContactForm;
