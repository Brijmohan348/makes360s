import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChartLine, FaBullseye, FaUsers, FaStar } from "react-icons/fa";
import "animate.css";

const ProvenResultsSection = () => {
  const stats = [
    { title: "Boosting Revenue", value: "2X to 6X", icon: <FaChartLine size={30} /> },
    { title: "Improved Leads", value: "3X to 8X", icon: <FaBullseye size={30} /> },
    { title: "Social Media Engagement", value: "4X to 8X", icon: <FaUsers size={30} /> },
    { title: "Brand Exposure", value: "100 to 1000%", icon: <FaStar size={30} /> },
  ];

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
        {/* Header */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="fw-bold animate__animated animate__fadeInDown">
              Proven Results with Real Impact
            </h2>
            <p
              className="animate__animated animate__fadeInDown animate__delay-1s"
              style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
            >
              Our strategies are not just theory—they deliver measurable improvements across the board. 
              From doubling revenues to massively increasing brand exposure, we help businesses achieve 
              tangible growth through smart, data-driven marketing solutions.
            </p>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="g-4 text-center justify-content-center">
          {stats.map((stat, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card
                className="animate__animated animate__zoomIn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "15px",
                  padding: "30px 20px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  color: "#fff",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="mb-3">{stat.icon}</div>
                <h5 className="mb-2">{stat.title}</h5>
                <h3 className="fw-bold">{stat.value}</h3>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProvenResultsSection;
