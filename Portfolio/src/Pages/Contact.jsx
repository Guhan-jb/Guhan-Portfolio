import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function ContactPage() {
  return (
    <div className="container mt-5 mb-5">
      <Card className="card">
        <h5 className="card-title mt-3 ms-3">Contact</h5>

        <Row className="">
          <Col md={12}>
          <Card.Body>
  <div className="row mt-3 d-flex align-items-center justify-content-center">
    <div className="col-md-10">
      <a href="mailto:jbguhan@gmail.com"className="card-link"  target="_blank" rel="noopener noreferrer">
        <Card className="card">
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>jbguhan@gmail.com</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  </div>

  <div className="row mt-3 d-flex align-items-center justify-content-center">
    <div className="col-md-10">
      <a href="https://linkedin.com/in/guhan-jb/" className="card-link"  target="_blank" rel="noopener noreferrer">
        <Card className="card">
          <Card.Body>
            <Card.Title>LinkedIn</Card.Title>
            <Card.Text>linkedin.com/in/guhan-jb/</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  </div>

  <div className="row mt-3 d-flex align-items-center justify-content-center">
    <div className="col-md-10">
      <a href="https://github.com/Guhan-jb" className="card-link"  target="_blank" rel="noopener noreferrer">
        <Card className="card">
          <Card.Body>
            <Card.Title>GitHub</Card.Title>
            <Card.Text>github.com/Guhan-jb</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  </div>
</Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
