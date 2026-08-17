function NavBar({ activeSection, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Student<span>Hub</span>
      </a>

      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === "Home" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "About" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "Skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "Contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          <span className={darkMode ? "toggle-knob dark-knob" : "toggle-knob"}></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;