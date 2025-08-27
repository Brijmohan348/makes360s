import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FaChevronDown, FaGift } from "react-icons/fa";
import "animate.css";

const CustomNavbar = () => {
  // Dropdown states for hover
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #002b5b, #005f73)", // same as Hero
        padding: "12px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
      variant="dark"
      sticky="top"
    >
      <Container>
        {/* Logo with pulse animation */}
        <img
          src="https://www.makes360.com/img/makes360-logo-white.png"
          height="35"
          width="145"
          alt="Makes360 Logo White"
          className="animate__animated animate__pulse animate__infinite"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav
            className="ms-auto align-items-lg-center"
            style={{
              gap: "12px",
            }}
          >
            {/* About Us Dropdown */}
            <NavDropdown
              show={aboutOpen}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
              title={
                <span style={{ color: "#fff", fontWeight: 500 }}>
                  About Us <FaChevronDown size={12} />
                </span>
              }
              id="about-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#our-story">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#our-work">Our Work</NavDropdown.Item>
              <NavDropdown.Item href="#testimonials">
                Testimonials & Reviews
              </NavDropdown.Item>
              <NavDropdown.Item href="#training">
                Training & Internship
              </NavDropdown.Item>
            </NavDropdown>

            {/* Services Dropdown */}
            <NavDropdown
              show={servicesOpen}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              title={
                <span style={{ color: "#fff", fontWeight: 500 }}>
                  Services <FaChevronDown size={12} />
                </span>
              }
              id="services-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#web">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#app">App Development</NavDropdown.Item>
              <NavDropdown.Item href="#branding">Branding & Design</NavDropdown.Item>
              <NavDropdown.Item href="#marketing">Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#seo">SEO</NavDropdown.Item>
              <NavDropdown.Item href="#reputation">Online Reputation</NavDropdown.Item>
            </NavDropdown>

            {/* Industries Dropdown */}
            <NavDropdown
              show={industriesOpen}
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
              title={
                <span style={{ color: "#fff", fontWeight: 500 }}>
                  Industries <FaChevronDown size={12} />
                </span>
              }
              id="industries-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#law">Law Firms</NavDropdown.Item>
              <NavDropdown.Item href="#hotel">Hotels & Restaurants</NavDropdown.Item>
              <NavDropdown.Item href="#real-estate">Real Estate</NavDropdown.Item>
              <NavDropdown.Item href="#school">School & Coaching</NavDropdown.Item>
              <NavDropdown.Item href="#healthcare">Healthcare</NavDropdown.Item>
              <NavDropdown.Item href="#startup">Business & Startup</NavDropdown.Item>
              <NavDropdown.Item href="#ecommerce">E-Commerce</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#all-industries">
                See All Industries
              </NavDropdown.Item>
            </NavDropdown>

            {/* Contact */}
            <Nav.Link
              href="#contact"
              className="animate__animated animate__fadeInRight"
              style={{ color: "#fff", fontWeight: 500 }}
            >
              Contact
            </Nav.Link>

            {/* 🎁 Free Trial Button */}
            <Button
              href="#gift"
              className="ms-2 animate__animated animate__pulse animate__infinite"
              style={{
                backgroundColor: "#ffd700",
                border: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "30px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
                color: "#002b5b",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaGift /> Free Trial
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
