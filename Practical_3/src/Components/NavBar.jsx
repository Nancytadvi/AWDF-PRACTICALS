import { Link } from "react-router-dom";

function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Student<span>Hub</span>
      </Link>

      <div className="nav-right">

        <ul className="nav-links">

          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/projects">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>

        </ul>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          <span
            className={
              darkMode
                ? "toggle-knob dark-knob"
                : "toggle-knob"
            }
          ></span>
        </button>

      </div>
    </nav>
  );
}

export default NavBar;