import React, { useState, useEffect } from "react";

const PostListFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div>
      <h1>Danh sách bài viết (fetch)</h1>
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

export default PostListFetch;
