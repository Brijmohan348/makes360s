import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "animate.css";

const RecognitionSection = () => {
  const recognitions = [
    {
      title: "Covered by 100+ Top Media & Tech Platforms",
      icon: <FaCheckCircle size={30} />,
    },
    {
      title: "Highlighted for Innovation and Service Quality",
      icon: <FaCheckCircle size={30} />,
    },
    {
      title: "Recognized with Industry Awards & Titles",
      icon: <FaCheckCircle size={30} />,
    },
    {
      title: "Clients Satisfaction Rate: 99.3%",
      icon: <FaCheckCircle size={30} />,
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6610f2, #0d6efd)",
        color: "#fff",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text & Recognition Cards */}
          <Col md={6}>
            <h2 className="fw-bold animate__animated animate__fadeInLeft">
              Recognized by Leading Media & Tech Outlets
            </h2>
            <p
              className="animate__animated animate__fadeInLeft animate__delay-1s"
              style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "40px" }}
            >
              Makes360 has earned widespread recognition in national and international media for its innovation,
              digital excellence, and client success.
            </p>

            <Row className="g-4">
              {recognitions.map((item, index) => (
                <Col key={index} xs={12}>
                  <Card
                    className="animate__animated animate__zoomIn"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "none",
                      borderRadius: "15px",
                      padding: "20px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      color: "#fff",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <h6 className="mb-0">{item.title}</h6>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Side: Featured News Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://www.makes360.com/img/makes360-featured-in-news.jpg"
              alt="Makes360 Featured in News"
              className="img-fluid animate__animated animate__fadeInRight"
              style={{ 
                borderRadius: "15px", 
                maxHeight: "600px",  // Increased image height
                width: "100%",       // Full column width
                objectFit: "cover" 
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecognitionSection;
