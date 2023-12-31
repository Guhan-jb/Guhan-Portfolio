import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    title: "TickPick",
    description: "A Generative AI based Edtech website built with streamlit helping students to learn better and easier.",
    link: "https://github.com/Guhan-jb/TickPick",
  },
  {
    title: "Hippo-GPT",
    description: "A Generative AI website based on chat-GPT that can produce both text and image based on user's prompt.",
    link: "https://github.com/Guhan-jb/HippoGPT",
  },
  {
    title: "CarBros",
    description: "A car catalog Website helps to manage the inventory of a dealer. Built with Spring Boot and ReactJS.",
    link: "https://github.com/Guhan-jb/FullStack",
  },
  {
    title: "SportZ",
    description: "A sports e-commerce website designed and build with ReactJS, Bootstrap, Spring Boot. This website is built with microservice architecture.",
    link: "https://github.com/Guhan-jb/SportZ",
  },
];

export default function ProjectPage() {
  const splitProjects = (projects) => {
    const middleIndex = Math.ceil(projects.length / 2);
    const firstRow = projects.slice(0, middleIndex);
    const secondRow = projects.slice(middleIndex);

    return [firstRow, secondRow];
  };

  const [firstRow, secondRow] = splitProjects(projects);

  return (
    <div className="container mt-5">
      <Card className="card">
        <h5 className="card-title mt-3 ms-3">Projects</h5>

        <Row className="">
          <Col md={6}>
            <Card.Body>
              {firstRow.map((project, index) => (
                <div key={index} className="row mt-3 d-flex align-items-center justify-content-center">
                  <div className="col-md-10">
                    <Card className="card">
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">GitHub Link</a>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Col>

          <Col md={6}>
            <Card.Body>
              {secondRow.map((project, index) => (
                <div key={index} className="row mt-3 d-flex align-items-center justify-content-center">
                  <div className="col-md-10">
                    <Card className="card">
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">GitHub Link</a>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
