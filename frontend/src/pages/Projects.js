import { useState, useEffect } from "react";
import "../styles/Projects.css";

export default function Projects(props) {
  // Create state to hold projects
  const [projects, setProjects] = useState(null);

  // Create function to make API call
  const getProjectsData = async () => {
    // Make API call and get a response
    const response = await fetch(props.URL + "projects");
    // Turn response into JavaScript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // Make an initial call for the data inside a useEffect, so it only happens once the component loads
  useEffect(() => {
    getProjectsData();
  }, []);

  // Define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <div className="buttons-container">
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <button>Github</button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button>Live Site</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}
