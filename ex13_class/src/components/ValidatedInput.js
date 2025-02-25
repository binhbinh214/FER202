import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateInput = (value) => {
  return value.length >= 5;
};

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (value.length > 0) {
      const isValidInput = validateInput(value);
      setIsValid(isValidInput);
      if (!isValidInput) {
        setErrorMessage("Giá trị phải có ít nhất 5 ký tự!");
      } else {
        setErrorMessage("");
      }
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  }, [value]);

  return (
    <Form className="form-container">
      <Form.Group className="form-group" controlId="validatedInput">
        <Form.Label className="form-label">Nhập một giá trị</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid}
          isInvalid={!isValid && value.length > 0}
        />
        <Form.Control.Feedback type="invalid" className="invalid-feedback">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={!isValid || value.length === 0}
        className="btn-primary"
      >
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;
