import React from "react";
import { Container } from "react-bootstrap";
import AllCourses from "../../components/AllCourses/AllCourses";
import IntroHeader from "../../components/IntroHeader/IntroHeader";
import course from "../../images/course.svg";
import "./Course.css";

const Courses = () => {
  return (
    <>
    <IntroHeader headerContent="Our courses" introBg={course}></IntroHeader>
      <Container>
        <AllCourses></AllCourses>
      </Container>
    </>
  );
};

export default Courses;
