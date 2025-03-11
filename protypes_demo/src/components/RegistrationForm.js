import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "../App.css";

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({
    name: false,
    age: false,
    email: false,
    phone: false,
    termsAccepted: false,
  });
  const [showAlert, setShowAlert] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10,15}$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
    validateField(name, newValue);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    const newValidFields = { ...validFields };
    const ageNum = parseInt(value, 10);

    if (fieldName === "name") {
      if (!value || value.length < 3 || value.length > 50) {
        newErrors.name = "Tên phải từ 3-50 ký tự!";
        newValidFields.name = false;
      } else {
        delete newErrors.name;
        newValidFields.name = true;
      }
    }

    if (fieldName === "age") {
      if (!value) {
        newErrors.age = "Tuổi không được để trống!";
        newValidFields.age = false;
      } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
        newErrors.age = "Tuổi phải từ 18-100!";
        newValidFields.age = false;
      } else {
        delete newErrors.age;
        newValidFields.age = true;
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

    if (fieldName === "phone") {
      if (!value) {
        newErrors.phone = "Số điện thoại không được để trống!";
        newValidFields.phone = false;
      } else if (!phoneRegex.test(value)) {
        newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";
        newValidFields.phone = false;
      } else {
        delete newErrors.phone;
        newValidFields.phone = true;
      }
    }

    if (fieldName === "termsAccepted") {
      if (!value) {
        newErrors.terms = "Bạn phải đồng ý với điều khoản!";
        newValidFields.termsAccepted = false;
      } else {
        delete newErrors.terms;
        newValidFields.termsAccepted = true;
      }
    }

    setErrors(newErrors);
    setValidFields(newValidFields);
  };

  const validateForm = () => {
    const newErrors = {};
    const ageNum = parseInt(formData.age, 10);

    if (!formData.name || formData.name.length < 3 || formData.name.length > 50)
      newErrors.name = "Tên phải từ 3-50 ký tự!";
    if (!formData.age) newErrors.age = "Tuổi không được để trống!";
    else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100)
      newErrors.age = "Tuổi phải từ 18-100!";
    if (!formData.email) newErrors.email = "Email không được để trống!";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Email không đúng định dạng!";
    if (!formData.phone) newErrors.phone = "Số điện thoại không được để trống!";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";
    if (!formData.termsAccepted)
      newErrors.terms = "Bạn phải đồng ý với điều khoản!";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  return (
    <Container className="form-container">
      <h3>Đăng Ký Người Dùng</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            className={validFields.name ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
            className={validFields.age ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            className={validFields.email ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
            className={validFields.phone ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            name="termsAccepted"
            label="Đồng ý với điều khoản"
            checked={formData.termsAccepted}
            onChange={handleChange}
            isInvalid={!!errors.terms}
            className={validFields.termsAccepted ? "is-valid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            {errors.terms}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng Ký
        </Button>
      </Form>
    </Container>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
