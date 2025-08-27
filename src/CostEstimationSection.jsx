import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "animate.css";

const CostEstimationSection = () => {
  const [estimatedCost, setEstimatedCost] = useState("");

  // Dummy calculation function
  const calculateCost = (e) => {
    e.preventDefault();
    // For example, just random estimate
    const cost = Math.floor(Math.random() * 50000 + 5000);
    setEstimatedCost(`₹${cost.toLocaleString()}`);
  };

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
        <Row className="align-items-center">
          {/* Left Side: Text + Form */}
          <Col md={6}>
            <h2 className="fw-bold animate__animated animate__fadeInLeft">
              Use our free cost calculator tool
            </h2>
            <p
              className="animate__animated animate__fadeInLeft animate__delay-1s"
              style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "40px" }}
            >
              Get an estimate for how much your project will cost. Fill in your
              requirements and see the projected cost instantly.
            </p>

            <Form onSubmit={calculateCost}>
              <Form.Group className="mb-3" controlId="projectType">
                <Form.Label>Project Type</Form.Label>
                <Form.Select required>
                  <option value="">Select</option>
                  <option value="website">Website</option>
                  <option value="mobileApp">Mobile App</option>
                  <option value="erp">ERP</option>
                  <option value="crm">CRM</option>
                  <option value="digitalMarketing">Digital Marketing</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="projectSize">
                <Form.Label>Project Size / Complexity</Form.Label>
                <Form.Select required>
                  <option value="">Select</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="enterprise">Enterprise</option>
                </Form.Select>
              </Form.Group>

              <Button
                type="submit"
                variant="light"
                className="me-3 px-4 py-2 fw-bold shadow animate__animated animate__pulse animate__infinite"
                style={{ borderRadius: "25px" }}
              >
                Calculate
              </Button>
              <Button
                variant="outline-light"
                className="px-4 py-2 fw-bold shadow"
                style={{ borderRadius: "25px" }}
              >
                ⬇️ Download Voucher
              </Button>
            </Form>

            {estimatedCost && (
              <Card
                className="mt-4 animate__animated animate__fadeIn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "15px",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <h5>Estimated Cost:</h5>
                <h3 className="fw-bold">{estimatedCost}</h3>
              </Card>
            )}
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbx5YTqECEGDwk7uPRXuUOoGFngpC1fU6V7w&s"
              alt="Cost Estimation"
              className="img-fluid animate__animated animate__fadeInRight"
              style={{
                borderRadius: "15px",
                maxHeight: "500px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CostEstimationSection;
