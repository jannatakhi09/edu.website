import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../../images/404 Error.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found">
      <Container>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <img className="notfound-img" src={notFound} alt="" />
          <button className="btn">
          <Link to='/'>Back to home</Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
