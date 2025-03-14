import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "be7e3a5d-9dc7-45eb-a736-2bb53a6d25f2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSubmissionStatus("Success! Your message has been sent.");
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    } else {
      setSubmissionStatus("Error! Something went wrong, please try again.");
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {submissionStatus && (
          <p className="submission-status">{submissionStatus}</p>
        )}
      </form>
    </div>
  );
};
