import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import "../App.css";

const initialState = { name: "", email: "", password: "", isSubmitted: false };
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [showAlert, setShowAlert] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    const newValidFields = { ...validFields };

    if (fieldName === "name") {
      if (!value) {
        newErrors.name = "Tên không được để trống!";
        newValidFields.name = false;
      } else {
        delete newErrors.name;
        newValidFields.name = true;
      }
    }

    if (fieldName === "email") {
      if (!value) {
        newErrors.email = "Email không được để trống!";
        newValidFields.email = false;
      } else if (!emailRegex.test(value)) {
        newErrors.email = "Email không đúng định dạng!";
        newValidFields.email = false;
      } else {
        delete newErrors.email;
        newValidFields.email = true;
      }
    }

    if (fieldName === "password") {
      if (!value) {
        newErrors.password = "Mật khẩu không được để trống!";
        newValidFields.password = false;
      } else {
        delete newErrors.password;
        newValidFields.password = true;
      }
    }

    setErrors(newErrors);
    setValidFields(newValidFields);
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!state.name) newErrors.name = "Tên không được để trống!";
    if (!state.email) newErrors.email = "Email không được để trống!";
    else if (!emailRegex.test(state.email))
      newErrors.email = "Email không đúng định dạng!";
    if (!state.password) newErrors.password = "Mật khẩu không được để trống!";
    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container className="form-container">
      <h3>{title}</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng điền đầy đủ thông tin.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            className={validFields.name ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            className={validFields.email ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            className={validFields.password ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default MyForm;
