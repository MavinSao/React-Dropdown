import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Question from "../Question";
import Section from "../Section";
import Multi from "../Multi/Multi";
import Answer from "../Answer";
function Tabar({ onAnswerChange }) {
  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">
        <Answer onAnswerChange={onAnswerChange} />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Section />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Multi />
      </Tab>
    </Tabs>
  );
}

export default Tabar;
