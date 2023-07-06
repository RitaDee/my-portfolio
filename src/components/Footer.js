import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Rita.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rita-daniel/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a rel="noreferrer" target="_blank" href="https://twitter.com/durdana_dee">
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a rel="noreferrer" target="_blank" href="https://github.com/RitaDee">
                <img src={navIcon3} alt="GitHub" className="git" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
