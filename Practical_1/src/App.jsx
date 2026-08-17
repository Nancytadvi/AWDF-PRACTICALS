import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Git & GitHub",
    "SQL",
  ];

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <NavBar
        activeSection="Home"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Header
        name="Nancy Tadvi"
        themeColor="#6b8793"
      />

      <About />

      <Skills skillList={skills} />

      <Footer email="nancy@gmail.com" />
    </div>
  );
}

export default App;