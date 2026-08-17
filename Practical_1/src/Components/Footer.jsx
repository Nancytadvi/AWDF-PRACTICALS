function Footer({ email }) {
  return (
    <footer id="contact">

      <div className="contact-section">

        <div>
          <p className="eyebrow">CONTACT</p>

          <h2>
            Let's
            <br />
            connect.
          </h2>
        </div>


        <div className="contact-right">

          <p>
            Feel free to reach out through email.
          </p>

          <a
            href={`mailto:${email}`}
            className="email-link"
          >
            {email}
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>StudentHub</span>

        <span>© 2026</span>

      </div>

    </footer>
  );
}

export default Footer;