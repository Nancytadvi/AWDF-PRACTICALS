import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
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
    <>
      <Header
        name="Nancy Tadvi"
        themeColor="#6b8793"
      />

      <About />

      <Skills skillList={skills} />
    </>
  );
}

export default Home;