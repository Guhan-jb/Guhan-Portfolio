import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import guhan from '../Assets/Images/guhan.jpg';
import TypingEffect from "../Components/TypingEffect";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const HomePage = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="p-5 d-flex align-items-center justify-content-center home"
        style={{ minHeight: '100vh' }}
      >
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
                src={guhan}
                alt="Guhan's Portfolio"
                className="img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
        <br />
      </motion.div>
    </>
  );
};

export default HomePage;
