import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import guhan from '../Assets/Images/guhan.jpg';

export default function HomePage() {
  return (
    <Container className="p-5 d-flex align-items-center justify-content-center" style={{'minHeight':'100vh'}}>
      <Row>
        <Col md={8} className="d-flex justify-content-center align-items-center">
          <div>
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hello, I'm Guhan. I'm a passionate developer with a focus on
              creating meaningful and innovative projects.
            </p>
            <p>
              Explore my work and experience to learn more about what I can
              offer.
            </p>
          </div>
        </Col>

        {/* Right half of the page with an image */}
        <Col md={4} className="d-flex justify-content-center">
          <div>
            <img
              src={guhan} // Replace with the URL or path to your image
              alt="Guhan's Portfolio"
              className="img-fluid rounded"
            />
          </div>
        </Col>
      </Row>
      <br />
    </Container>
  );
}
