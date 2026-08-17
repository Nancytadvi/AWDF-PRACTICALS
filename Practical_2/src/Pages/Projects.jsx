function Projects() {
  const projects = [
    {
      title: "StudentHub",
      description:
        "A student portfolio application built using React.",
      technology: "React.js",
    },
    {
      title: "Tribute Website",
      description:
        "A responsive tribute website created using HTML, CSS and JavaScript.",
      technology: "HTML, CSS, JavaScript",
    },
    {
      title: "Movie Review Database",
      description:
        "A database project for managing movies and user reviews.",
      technology: "PHP, MySQL",
    },
  ];

  return (
    <main className="page-section">
      <p className="eyebrow">MY WORK</p>

      <h1>Projects</h1>

      <p className="page-intro">
        A collection of projects I have worked on while learning
        software development.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-number">
              0{index + 1}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span className="project-tech">
              {project.technology}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;