import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Tabs, Tab } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import PostDetailWithJson from "./components/PostDetailWithJson";
import PostWithJson from "./components/PostWithJson";

function App() {
  return (
    <Router>
      <Container>
        <h1>React Router Examples</h1>
        <Navigation />
        <Tabs defaultActiveKey="example1" className="mb-3">
          <Tab eventKey="example1" title="Example 1: Basic Routing">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
          </Tab>

          <Tab eventKey="example2" title="Example 2: JSON Data">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<PostWithJson />} />
              <Route path="/post/:id" element={<PostDetailWithJson />} />
            </Routes>
          </Tab>

          <Tab eventKey="example3" title="Example 3: Login Form">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
          </Tab>
        </Tabs>
      </Container>
    </Router>
  );
}

export default App;
