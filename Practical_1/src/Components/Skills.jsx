function Skills({ skillList }) {
  return (
    <section id="skills" className="section skills-section">

      <div className="section-title skills-title">
        <p className="eyebrow">MY SKILLS</p>

        <h2>
          Technologies
          <br />
          I am learning
        </h2>
      </div>


      <div className="skills-grid">

        {skillList.map((skill, index) => (
          <div className="skill-card" key={skill}>

            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{skill}</h3>

            <div className="skill-arrow">
              →
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;