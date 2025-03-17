import React, { useState, useEffect } from "react";

const PostListAsyncAwait = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div>
      <h1>Danh sách bài viết (async/await)</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListAsyncAwait;
