import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";
import "../App.css";

const UserProfile2 = ({ name, age, onSubmit }) => {
  const [formData, setFormData] = useState({ name, age });
  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({ name: false, age: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value); // Kiểm tra hợp lệ ngay khi thay đổi
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    const newValidFields = { ...validFields };
    const ageNum = parseInt(value, 10);

    if (fieldName === "name") {
      if (!value) {
        newErrors.name = "Tên là bắt buộc";
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
      } else if (isNaN(ageNum)) {
        newErrors.age = "Tuổi phải là một số hợp lệ!";
        newValidFields.age = false;
      } else if (ageNum < 18 || ageNum > 100) {
        newErrors.age = "Tuổi phải từ 18 đến 100!";
        newValidFields.age = false;
      } else {
        delete newErrors.age;
        newValidFields.age = true;
      }
    }

    setErrors(newErrors);
    setValidFields(newValidFields);
  };

  const validateForm = () => {
    const newErrors = {};
    const ageNum = parseInt(formData.age, 10);
    if (!formData.name) newErrors.name = "Tên là bắt buộc";
    if (!formData.age) newErrors.age = "Tuổi không được để trống!";
    else if (isNaN(ageNum)) newErrors.age = "Tuổi phải là một số hợp lệ!";
    else if (ageNum < 18 || ageNum > 100)
      newErrors.age = "Tuổi phải từ 18 đến 100!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  return (
    <Container className="form-container">
      <h3>Thông Tin Người Dùng (Form)</h3>
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

        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

UserProfile2.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSubmit: PropTypes.func.isRequired,
};

export default UserProfile2;
