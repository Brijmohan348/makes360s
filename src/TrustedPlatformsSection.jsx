import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "animate.css";

const TrustedPlatformsSection = () => {
  const platforms = [
    { name: "Google", rating: 4.9, img: "https://www.makes360.com/testimonials/images/google.png" },
    { name: "Trustpilot", rating: 4.5, img: "https://www.makes360.com/testimonials/images/trustpilot.png" },
    { name: "Justdial", rating: 4.9, img: "https://www.makes360.com/testimonials/images/justdial.png" },
    { name: "Glassdoor", rating: 4.9, img: "https://www.makes360.com/testimonials/images/glassdoor.png" },
    { name: "Clutch", rating: 5.0, img: "https://www.makes360.com/testimonials/images/clutch.png" },
    { name: "GoodFirms", rating: 5.0, img: "https://www.makes360.com/testimonials/images/goodfirm.png" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        color: "#fff",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        {/* Header */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="fw-bold animate__animated animate__fadeInDown">
              Rated & Trusted by Top Platforms
            </h2>
            <p
              className="animate__animated animate__fadeInDown animate__delay-1s"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              Recognized for excellence, we’re a top-rated choice across leading platforms.
              See why businesses and users trust us for quality and innovation.
            </p>
          </Col>
        </Row>

        {/* Platforms */}
        <Row className="g-4 justify-content-center text-center">
          {platforms.map((platform, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={2}>
              <Card
                className="animate__animated animate__zoomIn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "#fff",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* Logo with light background */}
                <div className="mb-3" style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.85)",
                      padding: "10px",
                      borderRadius: "12px",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={platform.img}
                      alt={platform.name}
                      style={{ width: "60px", height: "60px", objectFit: "contain" }}
                    />
                  </div>
                </div>

                <h5 className="fw-bold mb-2">{platform.rating} ⭐</h5>
                <p>{platform.name}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TrustedPlatformsSection;
