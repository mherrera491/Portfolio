import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

export default function Projects(props) {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project, index) => (
      <Card key={index} className="my-4">
        <Card.Img variant="top" src={project.image} alt={project.name} />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Button href={project.git} variant="primary">
            GitHub
          </Button>
          <Button href={project.live} variant="success" className="ms-2">
            Live Site
          </Button>
        </Card.Body>
      </Card>
    ));
  }; 

  return projects ? (
    <div className="container mt-5">
      <h1 className="mb-4">Portfolio Projects</h1>
      <div className="d-flex flex-wrap">{loaded()}</div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}