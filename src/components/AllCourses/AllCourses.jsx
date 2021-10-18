import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "../Card/Card";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  const url = "fakeData.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Row xs={1} md={3} className="g-4 py-5">
      {courses.map((item, ind) => (
        <SingleCard key={ind+"unique"} data={item}></SingleCard>
      ))}
    </Row>
  );
};

export default AllCourses;
