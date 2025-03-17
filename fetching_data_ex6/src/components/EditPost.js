import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        if (response.data) {
          setTitle(response.data.title);
          setContent(response.data.content);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };
    try {
      const response = await axios.put(
        `http://localhost:3001/posts/${id}`,
        updatedPost
      );
      if (response.status === 200) {
        setStatus("Bài viết đã được cập nhật!");
        setTimeout(() => navigate("/posts"), 1000);
      }
    } catch (error) {
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
      console.error("Lỗi khi cập nhật bài viết:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Chỉnh sửa bài viết</h1>
      {status && (
        <Alert variant={status.includes("thành công") ? "success" : "danger"}>
          {status}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="content" className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nhập nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cập nhật bài viết
        </Button>
      </Form>
    </Container>
  );
};

export default EditPost;
