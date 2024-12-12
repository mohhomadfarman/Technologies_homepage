import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Logo from "../assets/images/Technology Garage Logo - Dark.png";

import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className=" MeinHeader pb-0 pt-0">
        <Container>
          <Navbar.Brand href="#home">
            <img src='/assets/img/Technology Garage Logo - Dark.png' width={200} alt="" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

          <button 
          // onClick={handleShow}
           className="p-0 border-0 bg-transparent">
            <IoMenu size={35} />
          </button>

          <Offcanvas placement={"end"} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;
