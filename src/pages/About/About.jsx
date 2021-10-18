import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IntroHeader from "../../components/IntroHeader/IntroHeader";
import aboutImg from '../../images/about.png';
import bg from "../../images/about.svg";
import "./About.css";

const About = () => {
  return (
    <>
      <IntroHeader headerContent="About Us" introBg={bg}></IntroHeader>
      <Container>
        <Row className="py-4">
          <Col className="d-flex flex-column justify-content-center">
            <h1>Over 7000 Tutorials from 20 Courses</h1>
            <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl</p>
          </Col>
          <Col>
            <img src={aboutImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
