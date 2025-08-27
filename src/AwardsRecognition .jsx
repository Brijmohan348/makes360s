import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "animate.css";

const AwardsRecognition = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #007bff, #6610f2)",
        color: "#fff",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold animate__animated animate__fadeInDown mb-3">
              Our Awards & Recognition
            </h2>
            <p
              className="animate__animated animate__fadeInDown animate__delay-1s"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              At Makes360, our commitment to innovation, transparency, and client satisfaction has earned us top ratings from the most trusted platforms worldwide. 
              Whether it’s Google, Clutch, Trustpilot, or GoodFirms – our consistent 5-star service speaks volumes. We believe in delivering excellence every single day, and the world has taken notice.
            </p>

            <ListGroup
              variant="flush"
              className="mt-4 animate__animated animate__fadeInUp animate__delay-2s"
            >
              <ListGroup.Item
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  paddingLeft: 0,
                  fontSize: "1rem",
                }}
              >
                ⭐ Rated 4.9+ on Google, Justdial, and Glassdoor
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  paddingLeft: 0,
                  fontSize: "1rem",
                }}
              >
                🏆 Recognized by Clutch and GoodFirms as a Top Digital Agency
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  paddingLeft: 0,
                  fontSize: "1rem",
                }}
              >
                🤝 Trusted by thousands of users and growing every day
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  paddingLeft: 0,
                  fontSize: "1rem",
                }}
              >
                📰 Featured in multiple media outlets for digital innovation
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  paddingLeft: 0,
                  fontSize: "1rem",
                }}
              >
                ✅ ISO certified for quality and customer satisfaction
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center">
            <img
              src="https://www.makes360.com/testimonials/images/awards-certifications-min.png"
              alt="Awards & Certifications"
              className="img-fluid rounded shadow animate__animated animate__zoomIn"
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AwardsRecognition;
