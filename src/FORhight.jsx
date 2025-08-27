import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";

const PartnerOfferSection = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => setRecaptchaValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background:
          "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)", // meaningful gradient
        padding: "80px 0",
        color: "#fff",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Offer + Partner + Download */}
          <Col md={6} className="mb-4 mb-md-0">
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                padding: "40px",
                borderRadius: "15px",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
                Grab 36% OFF
              </h2>
              <h5 className="mb-3 animate__animated animate__fadeInDown animate__delay-1s">
                Kickstart Your Project in Just 2 Hours!
              </h5>
              <p className="mb-4 animate__animated animate__fadeInDown animate__delay-2s" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                Trusted by over 300 businesses, <strong>Makes360</strong> delivers
                tailored web, app, and marketing solutions with proven results,
                helping your business grow efficiently and effectively.
              </p>

              {/* Partner Image on top */}
              <div className="mb-3">
                <img
                  src="https://www.makes360.com/img/our-partner.png"
                  alt="Partner"
                  className="shadow-sm rounded animate__animated animate__fadeIn"
                  height={80}
                />
              </div>

              {/* Rating Text below image */}
              <p className="mb-3" style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                ⭐ 4.9/5 on Google | 350+ Clients Served | 100+ Projects Completed
              </p>

              {/* Download Voucher Button */}
              <Button
                href="#download"
                className="fw-bold py-2 animate__animated animate__pulse animate__infinite"
                style={{
                  backgroundColor: "#ff4081",
                  border: "none",
                  borderRadius: "10px",
                  width: "100%",
                  maxWidth: "250px",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                ⬇️ Download Voucher
              </Button>
            </div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col md={6}>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.95)",
                padding: "40px",
                borderRadius: "15px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                color: "#333",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6} className="mb-2">
                    <Form.Control placeholder="Your Name *" required />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Control placeholder="Email Id *" type="email" required />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6} className="mb-2">
                    <Form.Control placeholder="Contact Number *" required />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Control placeholder="India" />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us more about your need & goal (Minimum 30 characters)"
                    required
                  />
                </Form.Group>

                {/* reCAPTCHA */}
                <div className="mb-3 text-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Google's test key
                    onChange={handleRecaptchaChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "#0d6efd",
                      border: "none",
                      padding: "12px 30px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      width: "100%",
                      maxWidth: "500px",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    🎁 Get Free Quotes
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerOfferSection;
