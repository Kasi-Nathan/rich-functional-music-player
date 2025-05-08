import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiFillStar
} from "react-icons/ai";
import { MdLibraryMusic, MdSearch } from "react-icons/md";
import { CgGitFork } from "react-icons/cg";
import logo from "/tracks/art/mucik_logo.svg"; // make sure this path is correct

import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" >
          <img
            src={logo}
            alt="Mucik Logo"
            className="img-fluid"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <span className="brand-text">Mucik</span>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Nav Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between w-100">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/music" onClick={() => updateExpanded(false)}>
                <MdLibraryMusic style={{ marginBottom: "2px" }} /> Player
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/search" onClick={() => updateExpanded(false)}>
                <MdSearch style={{ marginBottom: "2px" }} /> Search
              </Nav.Link>
            </Nav.Item>

            {/* Optional: GitHub / Star Button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Kasi-Nathan/rich-functional-music-player"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
