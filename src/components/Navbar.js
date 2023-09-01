import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import logo from "../assets/img/Rita.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Os from "./oss"; // Import the Os component

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showOsModal, setShowOsModal] = useState(false); // State for the modal

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleShowOsModal = () => {
    setShowOsModal(true); // Show the modal when "OS" is clicked
  };

  const handleCloseOsModal = () => {
    setShowOsModal(false); // Close the modal
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <Link
              to="#"
              className={
                activeLink === "os"
                  ? "active navbar-link os-link"
                  : "navbar-link os-link"
              }
              onClick={handleShowOsModal}
            >
              OS
            </Link>

            {/* Social icons and "Let’s Connect" button here */}
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/rita-daniel/"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/durdana_dee"
                >
                  <img src={navIcon2} alt="Twitter" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/RitaDee"
                >
                  <img src={navIcon3} alt="GitHub" className="git" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for OS component */}
      <Modal
        show={showOsModal}
        onHide={handleCloseOsModal}
        className="os-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Open Source Contributions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Os />
        </Modal.Body>
      </Modal>
    </Router>
  );
};
