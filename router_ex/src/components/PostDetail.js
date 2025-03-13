// src/components/PostDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Post Detail for Post ID: {id}</h2>
      <p>This is the detailed information for post {id}.</p>
    </div>
  );
}

export default PostDetail;
