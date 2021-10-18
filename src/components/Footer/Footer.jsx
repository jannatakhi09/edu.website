import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_container">
      <Container>
        <Row>
          <Col md={ 4 } className="footer">
            <img src={logo} alt="" />
            <p>
              The automated process starts as soon as your clothes go into the
              machine.
            </p>

            <ul>
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-pinterest-p"></i>
              </li>
            </ul>
          </Col>
          <Col md={ 8} className="d-flex align-items-center justify-content-between">
            <div className="footer_menu">
              <h4>Our solutions</h4>
              <ul>
                <li>Design & creatives</li>
                <li>Telecommunication</li>
                <li>Restaurant</li>
                <li>Programing</li>
                <li>Architecture</li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4>Support</h4>
              <ul>
                <li>Design & creatives</li>
                <li>Telecommunication</li>
                <li>Restaurant</li>
                <li>Programing</li>
                <li>Architecture</li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4>Company</h4>
              <ul>
                <li>Design & creatives</li>
                <li>Telecommunication</li>
                <li>Restaurant</li>
                <li>Programing</li>
                <li>Architecture</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
