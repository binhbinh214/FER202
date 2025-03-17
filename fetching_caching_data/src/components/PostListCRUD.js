import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PostListCRUD = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Không có bài viết nào!</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Danh sách bài viết (CRUD)</h1>
      <button>
        <Link to="/create">Tạo bài viết mới</Link>
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
              <Link to={`/edit/${post.id}`}>Chỉnh sửa</Link>
              <button onClick={() => handleDelete(post.id)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListCRUD;
