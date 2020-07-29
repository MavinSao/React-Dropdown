import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Answer from "../Answer";
import Multi from "../Multi/Multi";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
function Question() {
  const [compo, setCompo] = useState(<Answer />);

  const options = [
    { value: <Answer />, label: "Answer" },
    { value: <Multi />, label: "Multi" },
  ];
  return (
    <Card className="my-2">
      <Card.Header as="h5">Question</Card.Header>
      <Card.Body>
        <Form.Group>
          <Dropdown
            className="my-2"
            options={options}
            onChange={(e) => {
              setCompo(e.value);
            }}
            value={"Answer"}
            placeholder="Select an option"
          />
          {compo}
        </Form.Group>
        <Button variant="primary" className="mx-2 float-lg-right">
          New
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Question;
