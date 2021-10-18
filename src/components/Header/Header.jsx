import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between">
          <div className="nav_logo">
            <img src={logo} alt="courses" />
          </div>
          <div className="d-flex align-items-center">
            <ul className="nav_menu d-flex align-items-center">
              <li className="nav_item">
                <NavLink className="nav_link" to="/home">
                  Home
                </NavLink>
              </li>
             
              <li className="nav_item">
                <NavLink className="nav_link" to="/courses">
                  All Courses
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink className="nav_link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink className="nav_link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <a href="/" className="btn">
              Join
            </a>
            <a href="/" className="btn btn3">
              Log In
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
