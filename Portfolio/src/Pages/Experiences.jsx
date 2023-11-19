import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const experiences = [
  {
    title: "Machine Learning Lead",
    organization: "Google DSC - SKCT",
    date: "Present",
  },
 
];

export default function ExperiencesPage() {
  return (
    <div className="container mt-5 mb-5">
      <Card className="card">
        <h5 className="card-title mt-3 ms-3">Experiences</h5>

        <Row className="">
          <Col md={12}>
            <Card.Body>
              {experiences.map((experience, index) => (
                <div key={index} className="row mt-3 d-flex align-items-center justify-content-center">
                  <div className="col-md-10">
                    <Card className="card">
                      <Card.Body>
                        <Card.Title>{experience.title}</Card.Title>
                        <Card.Text>
                          <strong>Organization:</strong> {experience.organization}<br />
                          <strong>Date:</strong> {experience.date}
                        </Card.Text>
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
