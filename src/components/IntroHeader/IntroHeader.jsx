import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImg from "../../images/intro-bg.png";
import './IntroHeader.css';

const IntroHeader = (props) => {
    const {headerContent, introBg} = props;
    return (
        <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="courses_container"
      >
        <Container>
          <Row className="d-flex align-items-center course_header">
            <Col>
              <h1>{headerContent}</h1>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <img className="course_header_img" src={introBg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default IntroHeader;