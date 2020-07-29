
import logo from './logo.svg';
import './App.css';
import Menu from './components/NavBar';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Item from './components/Question';
import Tabar from './components/Tabar/Tabar';

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Item />
          <Item />
          <Button className="my-2">Save</Button>
        </Container>
      </div>
    )
  }
}

