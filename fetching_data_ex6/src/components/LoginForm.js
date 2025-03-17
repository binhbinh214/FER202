import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import PropTypes from "prop-types";

// Component con để hiển thị thông báo
const Message = ({ message, variant }) => (
  <Alert variant={variant}>{message}</Alert>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!username || !password) {
      setError("Username và Password không được để trống!");
      setSuccess("");
      return;
    }

    try {
      // Gửi yêu cầu đến API để lấy danh sách useraccounts
      const response = await axios.get("http://localhost:3001/useraccounts");
      const users = response.data;

      // Kiểm tra thông tin đăng nhập
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        setSuccess(`Đăng nhập thành công với username: ${username}`);
        setError("");
        // Điều hướng đến trang PostList sau 1 giây
        setTimeout(() => {
          navigate("/posts");
        }, 1000);
      } else {
        setError("Username hoặc Password không đúng!");
        setSuccess("");
      }
    } catch (err) {
      setError("Đã có lỗi xảy ra khi đăng nhập!");
      setSuccess("");
      console.error("Lỗi khi đăng nhập:", err);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Đăng nhập</h2>
      {error && <Message message={error} variant="danger" />}
      {success && <Message message={success} variant="success" />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
