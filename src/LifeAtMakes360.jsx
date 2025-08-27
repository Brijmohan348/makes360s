import React from "react";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaDownload, FaPlay } from "react-icons/fa";
import "animate.css";

const LifeAtMakes360 = () => {
  const teamSlides = [
    { title: "Team Brainstorming", img: "https://www.makes360.com/img/life/team1.jpg" },
    { title: "Sales Training", img: "https://www.makes360.com/img/life/team2.jpg" },
    { title: "Press Event", img: "https://www.makes360.com/img/life/team3.jpg" },
    { title: "Team Workshop", img: "https://www.makes360.com/img/life/team4.jpg" },
  ];

  const services = [
    "Website Development",
    "Web App Development",
    "Mobile Apps Development",
    "Branding & Design",
    "Digital Marketing",
    "Search Engine Optimization",
    "Online Reputation Management",
  ];

  const industries = [
    "Hotel & Restaurant",
    "Real Estate",
    "School & Coaching",
    "Healthcare",
    "Business & Start-up",
    "E-commerce & Retail",
    "Travel & Tourism",
    "Event Management",
    "Finance & Insurance",
    "Fashion & Design",
    "Gym & Fitness",
    "Beauty & Cosmetic",
    "Entertainment & Media",
    "College & University",
  ];

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #6610f2, #007bff)",
        color: "#fff",
        padding: "80px 0",
      }}
    >
      <Container>
        {/* Section Title */}
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-bold animate__animated animate__fadeInDown">Life at Makes360</h2>
            <p className="animate__animated animate__fadeInDown animate__delay-1s" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              Life at Makes360 is all about creativity, growth, and teamwork. We embrace innovation, celebrate achievements, and create an inspiring workplace where talent thrives and people grow together.
            </p>
          </Col>
        </Row>

        {/* Team Carousel */}
        <Row className="mb-5">
          <Col>
            <Carousel indicators={false} interval={3500}>
              {teamSlides.map((slide, index) => (
                <Carousel.Item key={index}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <h4 className="fw-bold">{slide.title}</h4>
                    </Col>
                    <Col md={6}>
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="img-fluid rounded shadow animate__animated animate__zoomIn"
                        style={{ maxHeight: "300px" }}
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Trusted Clients */}
        <Row className="mb-5 text-center">
          <Col>
            <h3 className="fw-bold animate__animated animate__fadeInDown">Trusted by 324+ Industry Leaders</h3>
            <p className="animate__animated animate__fadeInDown animate__delay-1s">
              We are proud to have partnered with a wide range of clients from various industries.
            </p>
          </Col>
        </Row>

        {/* Services */}
        <Row className="mb-5">
          {services.map((service, idx) => (
            <Col key={idx} md={4} className="mb-3">
              <Card
                className="p-3 h-100 shadow animate__animated animate__fadeInUp"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "none", color: "#fff" }}
              >
                <FaPlay size={24} className="mb-2" />
                <h5>{service}</h5>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Industries */}
        <Row className="mb-5">
          <Col>
            <h3 className="fw-bold mb-4">Industries We Serve</h3>
            <Row>
              {industries.map((ind, idx) => (
                <Col key={idx} md={3} className="mb-2">
                  <Button variant="outline-light" className="w-100">
                    {ind}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Contact Info */}
        <Row className="mb-5">
          <Col md={6} className="mb-3">
            <h4 className="fw-bold">Contact Our Team</h4>
            <p><FaPhone /> India +91 91 3210 3210 (Anish, IT Support, 24x7)</p>
            <p><FaPhone /> India +91 7781084258 (Shree, Relationship Manager)</p>
            <p><FaPhone /> India +91 9501981529 (Abhishek, Relationship Manager)</p>
            <p><FaPhone /> India +91 9815346210 (Harpreet, Relationship Manager)</p>
            <p><FaEnvelope /> relation[@]makes360.com</p>
            <p>Corporate Office: Makes360, 1st Floor, Chandigarh Group of Colleges (CGC) - Landran, Block-3, Makes360 - ACIC Rise, Landran, Punjab 140307</p>
          </Col>

          {/* Call to Action */}
          <Col md={6} className="text-center">
            <Button variant="light" size="lg" className="mb-3 w-75 text-primary fw-bold">
              Free Trial
            </Button>
            <Button variant="warning" size="lg" className="w-75 fw-bold">
              Download Brochure <FaDownload />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LifeAtMakes360;
