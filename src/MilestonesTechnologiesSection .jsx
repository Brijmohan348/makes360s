import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "animate.css";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaDatabase,
  FaWordpress,
  FaPaintBrush,
  FaGoogle,
  FaFacebookF,
  FaSearch,
  FaChartLine,
  FaInstagram,
  FaTwitter,
  FaStar,
  FaUsers
} from "react-icons/fa";

const MilestonesTechnologiesSection = () => {
  const milestones = [
    { title: "Projects Done", value: "154+", icon: <FaChartLine size={30} /> },
    { title: "Awards Won", value: "8+", icon: <FaStar size={30} /> },
    { title: "Happy Clients", value: "324+", icon: <FaUsers size={30} /> },
  ];

  const technologies = [
    { title: "Frontend", icon: <FaReact size={30} /> },
    { title: "Backend", icon: <FaNodeJs size={30} /> },
    { title: "Mobile", icon: <FaMobileAlt size={30} /> },
    { title: "Database", icon: <FaDatabase size={30} /> },
    { title: "CMS & E-commerce", icon: <FaWordpress size={30} /> },
    { title: "Design", icon: <FaPaintBrush size={30} /> },
    { title: "Marketing", icon: <FaChartLine size={30} /> },
    { title: "Google Ads", icon: <FaGoogle size={30} /> },
    { title: "Meta Ads", icon: <FaFacebookF size={30} /> },
    { title: "SEO", icon: <FaSearch size={30} /> },
    { title: "Google Analytics", icon: <FaChartLine size={30} /> },
    { title: "Instagram Ads", icon: <FaInstagram size={30} /> },
    { title: "Twitter Ads", icon: <FaTwitter size={30} /> },
  ];

  const industries = [
    "Political Campaigns",
    "Real Estate",
    "Business & Startups",
    "School & Coaching",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #007bff, #6610f2)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        padding: "80px 0",
      }}
    >
      <Container>
        {/* Milestones */}
        <Row className="mb-5 text-center justify-content-center">
          {milestones.map((m, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card
                className="animate__animated animate__fadeInUp"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <div className="mb-2">{m.icon}</div>
                <h3 className="fw-bold">{m.value}</h3>
                <p>{m.title}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technologies */}
        <h2 className="fw-bold text-center mb-4 animate__animated animate__fadeInDown">
          Technologies & Tech Suites We Offer
        </h2>
        <p className="text-center mb-5 animate__animated animate__fadeInDown animate__delay-1s">
          We offer expertise across a wide range of leading technologies and comprehensive tech suites. Our focus is on leveraging the right tools to build innovative websites and mobile applications.
        </p>
        <Row className="g-3 justify-content-center">
          {technologies.map((tech, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="text-center">
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
                <div className="mb-2">{tech.icon}</div>
                <h6>{tech.title}</h6>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Buttons */}
        <Row className="mt-5 animate__animated animate__fadeInUp">
          <Col className="d-flex flex-wrap gap-3 justify-content-center">
            <Button
              variant="light"
              className="fw-bold px-4 py-2 animate__animated animate__pulse animate__infinite"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline-light"
              className="fw-bold px-4 py-2 animate__animated animate__pulse animate__infinite"
            >
              Download Voucher
            </Button>
            <Button
              variant="warning"
              className="fw-bold px-4 py-2 animate__animated animate__pulse animate__infinite"
            >
              Calculate Cost
            </Button>
          </Col>
        </Row>

        {/* Industries */}
        <h2 className="fw-bold text-center mt-5 mb-4 animate__animated animate__fadeInDown">
          Industries We Serve
        </h2>
        <Row className="g-3 justify-content-center">
          {industries.map((ind, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="text-center">
              <Card
                className="animate__animated animate__fadeInUp"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <h6>{ind}</h6>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MilestonesTechnologiesSection;
