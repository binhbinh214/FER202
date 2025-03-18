import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username và Password không được để trống!");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/UserAccounts");
      const users = response.data;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        setSuccess(`Welcome, ${username} login Successful!`);
        setError("");
        setTimeout(() => {
          navigate("/products");
        }, 1000);
      } else {
        setError("Invalid username or password!");
        setSuccess("");
      }
    } catch (err) {
      setError("Đã có lỗi xảy ra khi đăng nhập!");
      setSuccess("");
      console.error("Lỗi khi đăng nhập:", err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="login-card">
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Đăng nhập</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-pill"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-pill login-btn"
            >
              Đăng nhập
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
