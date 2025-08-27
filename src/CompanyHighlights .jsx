import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CompanyHighlights = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  };

  return (
    <section style={styles.section}>
      <Container>
        <h2 style={styles.heading}>Top Digital Consulting Company</h2>
        <p style={styles.description}>
          Makes360 is a results-driven digital agency founded in 2018,
          empowering <b>300+ businesses</b> across <b>10+ countries</b> with
          web design, development, mobile app development, ERP, CRM, and
          marketing solutions. We deliver up to <b>2600% business growth</b>,
          backed by a <b>30-day money-back guarantee</b>.
        </p>

        <Row className="mt-5 g-4 justify-content-center">
          {/* ISO Certified */}
          <Col md={3} sm={6}>
            <Card
              style={{ ...styles.card, background: "#007bff" }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Card.Img
                variant="top"
                src="https://www.makes360.com/img/highlight/makes360-iso-certified-company.png"
                alt="ISO Certified Company"
                style={styles.cardImg}
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>ISO Certified</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* NITI Aayog */}
          <Col md={3} sm={6}>
            <Card
              style={{ ...styles.card, background: "#6610f2" }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Card.Img
                variant="top"
                src="https://www.makes360.com/img/highlight/supported-by-niti-aayog.png"
                alt="Supported by NITI Aayog"
                style={styles.cardImg}
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>
                  Supported by NITI Aayog
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* ACIC Rise */}
          <Col md={3} sm={6}>
            <Card
              style={{ ...styles.card, background: "#00c6ff" }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Card.Img
                variant="top"
                src="https://www.makes360.com/img/highlight/supported-by-acic-rise.png"
                alt="Supported by ACIC Rise"
                style={styles.cardImg}
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>
                  Supported by ACIC Rise
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Startup India */}
          <Col md={3} sm={6}>
            <Card
              style={{ ...styles.card, background: "#ff4081" }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Card.Img
                variant="top"
                src="https://www.makes360.com/img/highlight/supported-by-startup-india.png"
                alt="Supported by Startup India"
                style={styles.cardImg}
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>
                  Supported by Startup India
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// CSS in JS
const styles = {
  section: {
    background: "linear-gradient(135deg, #0d6efd, #6610f2)",
    padding: "60px 20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    textAlign: "center",
  },
  heading: { fontSize: "2rem", fontWeight: 700, marginBottom: 20 },
  description: { fontSize: "1.1rem", maxWidth: 900, margin: "0 auto", color: "#f0f0f0" },
  card: {
    border: "none",
    borderRadius: "12px",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardImg: { maxHeight: 100, objectFit: "contain", marginBottom: 12 },
  cardTitle: { fontWeight: 600, fontSize: "1.1rem" },
};

export default CompanyHighlights;
