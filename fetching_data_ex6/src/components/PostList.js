import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Table, Button, Card } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Không có bài viết nào!</div>;
  }

  return (
    <Container className="mt-5">
      <h1>Danh sách bài viết</h1>
      <Button variant="success" className="mb-3">
        <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
          Tạo bài viết mới
        </Link>
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <Button variant="warning" className="me-2">
                  <Link
                    to={`/edit/${post.id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Chỉnh sửa
                  </Link>
                </Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;
