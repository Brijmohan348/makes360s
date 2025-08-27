import React from "react";
import { Container, Row, Col, Carousel, Button, ListGroup, Card } from "react-bootstrap";
import "animate.css";
import { FaStar, FaCheckCircle, FaAward } from "react-icons/fa";

const TechnologiesSection = () => {
  const slides = [
    {
      title: "Technologies & Achievements",
      description:
        "We offer expertise across a wide range of technologies and comprehensive tech suites. Our focus is on leveraging the right tools to build innovative websites and mobile applications. We help you harness the power of technology to achieve your business objectives.",
      image: "https://www.makes360.com/testimonials/images/trademark.png",
    },
    {
      title: "Frontend & Backend",
      description:
        "We specialize in building robust frontend and backend solutions using modern frameworks and programming languages.",
      image: "https://www.makes360.com/testimonials/images/best-entrepreneur.png",
    },
    {
      title: "Mobile & Database",
      description:
        "Our team delivers high-quality mobile applications and manages complex database solutions for scalable apps.",
      image: "https://www.makes360.com/testimonials/images/dpiit-certified.png",
    },
    {
      title: "CMS & Marketing",
      description:
        "From designing engaging experiences to managing SEO, Google Ads, and Meta campaigns, we cover all aspects of digital marketing.",
      image: "https://www.makes360.com/testimonials/images/iso-certified.png",
    },
  ];

  const awards = [
    { icon: <FaStar />, text: "Rated 4.9+ on Google, Justdial, and Glassdoor" },
    { icon: <FaAward />, text: "Recognized by Clutch and GoodFirms as a Top Digital Agency" },
    { icon: <FaCheckCircle />, text: "Trusted by thousands of users and growing every day" },
    { icon: <FaStar />, text: "Featured in multiple media outlets for digital innovation" },
    { icon: <FaCheckCircle />, text: "ISO certified for quality and customer satisfaction" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6610f2, #007bff)",
        color: "#fff",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <h2 className="fw-bold text-center mb-5 animate__animated animate__fadeInDown">
          Technologies, Achievements & Awards
        </h2>

        <Carousel interval={5000} fade indicators={false}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <Row className="align-items-center">
                {/* Left Side - Text + Awards */}
                <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                  <h3 className="fw-bold animate__animated animate__fadeInLeft">{slide.title}</h3>
                  <p className="animate__animated animate__fadeInLeft animate__delay-1s" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                    {slide.description}
                  </p>

                  <ListGroup variant="flush" className="mt-4">
                    {awards.map((award, idx) => (
                      <ListGroup.Item
                        key={idx}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#fff",
                          paddingLeft: 0,
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        className={`animate__animated animate__fadeInLeft animate__delay-${idx + 2}s`}
                      >
                        {award.icon} {award.text}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>

                  <Button
                    variant="light"
                    className="fw-bold mt-4 px-4 py-2 animate__animated animate__pulse animate__infinite"
                  >
                    Learn More
                  </Button>
                </Col>

                {/* Right Side - Image */}
                <Col md={6} className="text-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="img-fluid rounded shadow animate__animated animate__zoomIn"
                    style={{ maxHeight: "400px", transition: "transform 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default TechnologiesSection;
