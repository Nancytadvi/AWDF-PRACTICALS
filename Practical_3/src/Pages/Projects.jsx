import { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRepositories = () => {
    setLoading(true);
    setError(null);

    fetch("https://api.github.com/users/nancytadvi/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories.");
        }

        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={fetchRepos}
      />
    );
  }

  return (
    <main className="page-section">
      <p className="eyebrow">MY GITHUB WORK</p>

      <h1>Projects</h1>

      <p className="page-intro">
        These repositories are fetched dynamically from
        my GitHub profile using the GitHub REST API.
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="projects-grid">
        {filteredRepos.map((repo, index) => (
          <div className="project-card" key={repo.id}>
            <span className="project-number">
              0{index + 1}
            </span>

            <h2>{repo.name}</h2>

            <p>
              {repo.description || "No description available."}
            </p>

            <span className="project-tech">
              * {repo.stargazers_count} stars
            </span>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>

      {filteredRepos.length === 0 && (
        <p className="no-results">
          No repositories found.
        </p>
      )}
    </main>
  );
}

export default Projects;