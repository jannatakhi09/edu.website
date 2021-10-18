import React from "react";
import { Container } from "react-bootstrap";
import Form from "../../components/Form/Form";
import IntroHeader from "../../components/IntroHeader/IntroHeader";
import contact from "../../images/contact.svg";

const Contact = () => {
  return (
    <>
    <IntroHeader headerContent="Contact us" introBg={contact}></IntroHeader>
      <Container>
        <Form></Form>
      </Container>
    </>
  );
};

export default Contact;
