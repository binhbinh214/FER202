import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Xác nhận xóa bài viết</h1>
      <p>Bạn chắc chắn muốn xóa bài viết này?</p>
      <Button variant="danger" onClick={handleDelete} className="me-2">
        Xóa
      </Button>
      <Button variant="secondary" onClick={() => navigate("/posts")}>
        Hủy
      </Button>
    </Container>
  );
};

export default DeletePost;
