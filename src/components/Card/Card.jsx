import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Card.css";

const SingleCard = (props) => {
  const { type, course, details, stars, img_url } = props.data;
  return (
    <Col>
      <Card>
        <Card.Img
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          variant="top"
          src={img_url}
        />
        <Card.Body>
          <p>{type}</p>
          <h4>{course}</h4>
          <p>{details}</p>
          <Rating
            initialRating={stars}
            emptySymbol={<i className="empty_stars fas fa-star"></i>}
            fullSymbol={<i className="fullmpty_stars fas fa-star"></i>}
          ></Rating>
          <div className="d-flex justify-content-between">
            <p>
              <span>(4.5) </span>Based on 120
            </p>
            <h3>$135</h3>
          </div>
          <a className="border-btn border-btn2" href="/">
            Find out more
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
