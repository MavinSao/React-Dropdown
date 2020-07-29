import React from "react";
import { Form } from "react-bootstrap";
function Answer({ onAnswerChange }) {
  return (
    <div>
      {" "}
      <br />
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Answer 1"
          name="answer1"
          onChange={onAnswerChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Answer 2"
          name="answer2"
          onChange={onAnswerChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Answer 3"
          name="answer3"
          onChange={onAnswerChange}
        />
      </Form.Group>
    </div>
  );
}

export default Answer;
