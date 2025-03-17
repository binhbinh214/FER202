import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Xác nhận xóa bài viết</h1>
      <p>Bạn chắc chắn muốn xóa bài viết này?</p>
      <button onClick={handleDelete}>Xóa</button>
      <button onClick={() => navigate("/")}>Hủy</button>
    </div>
  );
};

export default DeletePost;
