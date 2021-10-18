import React from "react";
import { Col, Row } from "react-bootstrap";
import './Form.css';

const Form = () => {
  return (
    <>
      <h2>Get in Touch</h2>
      <form>
        <Row>
          <Col md="8">
            <Row>
              <Col xs='12'>
                <textarea
                  className="w-100"
                  placeholder="Enter Message"
                  name=""
                  id=""
                  rows="10"
                ></textarea>
              </Col>
              <Col style={{margin: '20px 0'}} xs='6'>
              <input style={{padding: '10px', display: "block"}} className='w-100' type="text" placeholder="Enter your name"/>
              </Col>
              <Col style={{margin: '20px 0'}} xs='6'>
              <input style={{padding: '10px', display: "block"}} className='w-100' type="text" placeholder="Enter your email address" />
              </Col>
              <Col style={{marginBottom: '20px'}} xs='12'>
              <input style={{padding: '10px', display: "block"}} className='w-100' type="text" placeholder="Enter Subject" />
              </Col>
              <Col style={{marginBottom: '20px'}}>
              <a href="/" className="btn">
                SEND
              </a>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <div
              className="d-flex align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <div
                style={{ width: 50, height: 50 }}
                className="d-flex align-items-center justify-content-center"
              >
                <i
                  style={{
                    fontSize: "35px",
                    marginRight: "10px",
                    color: "rgb(181, 181, 181)",
                  }}
                  className="fas fa-home"
                ></i>
              </div>
              <div>
                <h5>Buttonwood, California.</h5>
                <p style={{ marginBottom: "0px", color: "rgb(102, 102, 102)" }}>
                  Rosemead, CA 91770
                </p>
              </div>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <div
                style={{ width: 50, height: 50 }}
                className="d-flex align-items-center justify-content-center"
              >
                <i
                  style={{
                    fontSize: "35px",
                    marginRight: "10px",
                    color: "rgb(181, 181, 181)",
                  }}
                  className="fas fa-mobile-alt"
                ></i>
              </div>
              <div>
                <h5>+1 253 565 2365</h5>
                <p style={{ marginBottom: "0px", color: "rgb(102, 102, 102)" }}>
                  Mon to Fri 9am to 6pm
                </p>
              </div>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <div
                style={{ width: 50, height: 50 }}
                className="d-flex align-items-center justify-content-center"
              >
                <i
                  style={{
                    fontSize: "35px",
                    marginRight: "10px",
                    color: "rgb(181, 181, 181)",
                  }}
                  className="far fa-envelope"
                ></i>
              </div>
              <div>
                <h5>support@colorlib.com</h5>
                <p style={{ marginBottom: "0px", color: "rgb(102, 102, 102)" }}>
                  Send us your query anytime!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default Form;
