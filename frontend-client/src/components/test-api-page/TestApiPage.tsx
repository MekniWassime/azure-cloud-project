import React, { useState } from "react";
import { Form } from "react-bootstrap";
import testApi from "../../services/service";
import AnimatedButton from "../animated-button/AnimatedButton";

export default function TestApiPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const fetchData = async () => {
    setLoading(true);
    const data = await testApi();
    setMessage(data["message"]);

    setTime(new Date(data["requestDate"]).toISOString());
    console.log(data);
    setLoading(false);
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Request Message</Form.Label>
            <Form.Control type="text" readOnly value={message} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Request Time</Form.Label>
            <Form.Control type="text" readOnly value={time} />
          </Form.Group>
          <AnimatedButton onClick={fetchData} loading={loading} />
        </Form>
      </div>
    </>
  );
}
