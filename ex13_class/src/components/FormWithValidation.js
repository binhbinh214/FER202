import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => password.length >= 8;

function FormWithValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (email.length > 0) {
      const isValidEmail = validateEmail(email);
      setEmailValid(isValidEmail);
      if (!isValidEmail) {
        setEmailError(
          "Email is not valid. Please use a correct format (e.g., user@example.com)"
        );
      } else {
        setEmailError("");
      }
    } else {
      setEmailValid(true);
      setEmailError("");
    }

    if (password.length > 0) {
      const isValidPassword = validatePassword(password);
      setPasswordValid(isValidPassword);
      if (!isValidPassword) {
        setPasswordError("Password must be at least 8 characters long");
      } else {
        setPasswordError("");
      }
    } else {
      setPasswordValid(true);
      setPasswordError("");
    }
  }, [email, password]);

  const isFormValid =
    emailValid && passwordValid && email.length > 0 && password.length > 0;

  return (
    <Form className="form-container">
      <Form.Group className="form-group" controlId="email">
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Control
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValid={emailValid}
          isInvalid={!emailValid && email.length > 0}
        />
        <Form.Control.Feedback type="invalid" className="invalid-feedback">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group" controlId="password">
        <Form.Label className="form-label">Password</Form.Label>
        <Form.Control
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={passwordValid}
          isInvalid={!passwordValid && password.length > 0}
        />
        <Form.Control.Feedback type="invalid" className="invalid-feedback">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={!isFormValid}
        className="btn-primary"
      >
        Submit
      </Button>
    </Form>
  );
}

export default FormWithValidation;
