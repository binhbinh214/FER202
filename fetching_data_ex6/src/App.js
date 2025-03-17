import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";

// Áp dụng Lazy Loading cho các component
const LoginForm = lazy(() => import("./components/LoginForm"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner animation="border" className="mt-5" />}>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/delete/:id" element={<DeletePost />} />
          </Routes>
        </Container>
      </Suspense>
    </Router>
  );
};

export default App;
