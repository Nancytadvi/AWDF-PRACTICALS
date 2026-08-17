function Header({ name, themeColor }) {
  return (
    <header id="home" className="hero">

      <div className="hero-left">
        <p className="eyebrow">
          COMPUTER ENGINEERING STUDENT
        </p>

        <h1>
          Hello, I'm
          <br />
          <span>{name}</span>
        </h1>

        <p
          className="hero-description"
          style={{ color: themeColor }}
        >
          I am interested in web development and learning
          React.js while building simple and useful projects.
        </p>

        <a href="#skills" className="primary-button">
          Explore my skills
        </a>
      </div>


      <div className="hero-right">
        <div className="profile-card">

          <div className="profile-top">
            <span>01</span>
            <span>STUDENTHUB</span>
          </div>

          <div className="profile-middle">
            <div className="circle"></div>

            <p>
              Learning
              <br />
              <strong>Web Development</strong>
            </p>
          </div>

          <div className="profile-bottom">
            <span>React.js</span>
            <span>2026</span>
          </div>

        </div>
      </div>

    </header>
  );
}

export default Header;