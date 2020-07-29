import React from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Item from "../Question";
function Menu() {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
