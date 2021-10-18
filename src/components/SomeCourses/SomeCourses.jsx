import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCard from "../Card/Card";
import './SomeCourses.css';

const SomeCourses = () => {
  const [courses, setCourses] = useState([]);

  const url = "fakeData.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Container className="some_courses">
        <h1>Popular Courses</h1>
      <Row xs={1} md={3} className="g-4 py-5">
        {courses.slice(0, 4).map((item, ind) => <SingleCard key={ind} data={item}></SingleCard>)}
      </Row>
    </Container>
  );
};

export default SomeCourses;
