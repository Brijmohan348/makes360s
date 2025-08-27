import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  // Inline style objects
  const styles = {
    section: {
      background: "linear-gradient(135deg, #0d6efd, #6610f2)",
      color: "#fff",
      padding: "80px 0",
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      lineHeight: "1.3",
    },
    paragraph: {
      fontSize: "1.1rem",
    },
    btnFreeTrial: {
      backgroundColor: "#fff",
      color: "#0d6efd",
      fontWeight: "bold",
      padding: "10px 25px",
      borderRadius: "30px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      border: "none",
      transition: "all 0.3s ease-in-out",
    },
    btnDownload: {
      backgroundColor: "transparent",
      color: "#fff",
      fontWeight: "bold",
      padding: "10px 25px",
      borderRadius: "30px",
      border: "2px solid #fff",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease-in-out",
    },
    btnHoverFreeTrial: {
      backgroundColor: "#ffc107",
      color: "#000",
      transform: "translateY(-3px) scale(1.05)",
    },
    btnHoverDownload: {
      backgroundColor: "#fff",
      color: "#0d6efd",
      transform: "translateY(-3px) scale(1.05)",
    },
  };

  // Hover effect logic (React state not needed for minimal animations)
  const handleMouseOver = (e, type) => {
    Object.assign(
      e.target.style,
      type === "trial" ? styles.btnHoverFreeTrial : styles.btnHoverDownload
    );
  };

  const handleMouseOut = (e, type) => {
    Object.assign(
      e.target.style,
      type === "trial" ? styles.btnFreeTrial : styles.btnDownload
    );
  };

  return (
    <div style={styles.section}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side (Text + Buttons) */}
          <Col md={6} className="text-center text-md-start">
            <h5 className="text-warning mb-2">
              Idea • Development • Branding
            </h5>
            <h1 className="fw-bold mb-3" style={styles.heading}>
              Increase Your <br />
              Business Growth by <span className="text-light">2600%</span>
            </h1>
            <p className="mb-4" style={styles.paragraph}>
              <strong>Makes360</strong> has been one of the best digital
              consulting companies in India since 2018. <br />
              We provide end-to-end digital solutions — from innovative
              strategy and creative branding to full-stack development and
              marketing. We don’t just build projects,{" "}
              <b>we build long-term growth stories.</b>
            </p>
            <div>
              <Button
                style={styles.btnFreeTrial}
                className="me-3"
                onMouseOver={(e) => handleMouseOver(e, "trial")}
                onMouseOut={(e) => handleMouseOut(e, "trial")}
              >
                🎁 Free Trial
              </Button>
              <Button
                style={styles.btnDownload}
                onMouseOver={(e) => handleMouseOver(e, "download")}
                onMouseOut={(e) => handleMouseOut(e, "download")}
              >
                ⬇️ Download Voucher
              </Button>
            </div>
          </Col>

          {/* Right Side (Image) */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              className="rounded-3 img-fluid shadow-lg"
              src="https://www.makes360.com/img/home/makes360-team.png"
              alt="Makes360 Team"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
