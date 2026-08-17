import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <main className="page-section contact-page">
      <p className="eyebrow">GET IN TOUCH</p>

      <h1>Contact Me</h1>

      <p className="page-intro">
        Have a question or want to connect? Send me a message.
      </p>

      <form className="contact-form">

        <label htmlFor="name">
          Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
        />

        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          rows="6"
        />

        <p className="character-count">
          Characters: {message.length}
        </p>

        <button
          type="button"
          className="help-button"
          onClick={() => setShowHelp(!showHelp)}
        >
          {showHelp ? "Hide Help" : "Show Help"}
        </button>

        {showHelp && (
          <p className="help-text">
            Write your message in the box above. Your input is
            displayed and counted in real time.
          </p>
        )}

        <button type="submit" className="primary-button">
          Send Message
        </button>

      </form>
    </main>
  );
}

export default Contact;