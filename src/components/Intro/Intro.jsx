import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import introBg from '../../images/intro-bg.png';
import intro from "../../images/intro.png";
import './Intro.css';

const Intro = () => {
    const bg_img = {
        backgroundImage: `url(${introBg})`,
    }
  return (
    <div style={bg_img} className="intro_container">
      <Container>
        <Row className="d-flex align-items-center" style={{padding: "80px 0"}}>
          <Col>
            <img className="intro_img" src={intro} alt="" />
          </Col>
          <Col className="intro_content">
            <h1>
              Online learning
              <br />
              platform
            </h1>
            <p>
              Build skills with courses, certificates, and degrees online from
              world-class universities and companies
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
