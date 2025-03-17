import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostListFetch from "./components/PostListFetch";
import PostListAsyncAwait from "./components/PostListAsyncAwait";
import PostListAxios from "./components/PostListAxios";
import PostListCRUD from "./components/PostListCRUD";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Quản lý Bài Viết</h1>
        <nav>
          <ul>
            <li>
              <Link to="/fetch">Ví dụ 1 (fetch)</Link>
            </li>
            <li>
              <Link to="/async">Ví dụ 2 (async/await)</Link>
            </li>
            <li>
              <Link to="/axios">Ví dụ 3 (Axios)</Link>
            </li>
            <li>
              <Link to="/crud">Ví dụ 4 (CRUD)</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/fetch" element={<PostListFetch />} />
          <Route path="/async" element={<PostListAsyncAwait />} />
          <Route path="/axios" element={<PostListAxios />} />
          <Route path="/crud" element={<PostListCRUD />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
