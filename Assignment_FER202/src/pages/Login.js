import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        setError("Incorrect username or password!");
        setIsLoading(false);
        return;
      }

      if (!user.active) {
        setError(
          "Your account is not active. Please contact the administrator!"
        );
        setIsLoading(false);
        return;
      }

      console.log("User before login:", user);
      onLogin(user);
      let welcomeMessage = "User";
      if (user.role?.toLowerCase() === "admin") {
        welcomeMessage = "Administrator";
      } else if (user.role?.toLowerCase() === "moderator") {
        welcomeMessage = "Moderator";
      }
      alert(`Login successful! Welcome ${welcomeMessage}!`);
      navigate("/");
    } catch (err) {
      console.error(
        "Error when logging in:",
        err.response || err.message || err
      );
      if (err.response) {
        setError(
          `Server error: ${
            err.response.data.message || err.response.statusText
          }`
        );
      } else if (err.request) {
        setError(
          "Cannot connect to the server. Please check if the JSON Server is running!"
        );
      } else {
        setError("An error occurred during login. Please try again!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="login-page">
      <Row className="vh-100">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center login-image-col"
        >
          <Image
            src="/images/login.jpg"
            alt="Pokémon Scarlet and Violet"
            fluid
            className="login-image"
          />
        </Col>

        <Col
          md={6}
          className="d-flex align-items-center justify-content-center login-form-col"
        >
          <div className="login-form">
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label className="form-label">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                  disabled={isLoading}
                />
              </Form.Group>

              <Button
                type="submit"
                className="login-button w-100"
                disabled={isLoading}
              >
                {isLoading ? "Logging In..." : "Login"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
