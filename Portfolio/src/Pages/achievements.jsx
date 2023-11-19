import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const achievements = [
  {
    title: "Capture the flag by IIT Roorkee",
    description: "Winners",
  },
  {
    title: "Ideathon by AMET",
    description: "Top 10",
  },
  {
    title: "Hackacadamic by Manipal University",
    description: "Participation",
  },
  {
    title: "Warpseed GenAI hackathon by Replit, Google and AWS",
    description: "Participation",
  },
  {
    title: "TechTriump by Amritha School of Engineering",
    description: "Participation",
  },
];

export default function AchievementsPage() {
  return (
    <div className="container mt-5">
      <Card className="card">
        <h5 className="card-title mt-3 ms-3">Achievements</h5>

        <Row className="m-3">
          {achievements.map((achievement, index) => (
            <Col key={index} md={4}>
              <Card className="achievement-card">
                <Card.Body>
                  <Card.Title>{achievement.title}</Card.Title>
                  <Card.Text>{achievement.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}
