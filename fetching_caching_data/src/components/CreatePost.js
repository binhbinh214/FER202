import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
      console.error("Lỗi khi tạo bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Thêm bài viết mới</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Tạo bài viết</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default CreatePost;
