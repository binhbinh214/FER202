import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaHome as HomeIcon, FaUsers as UsersIcon } from "react-icons/fa";
import { MdRestaurant as RestaurantIcon } from "react-icons/md";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import DishList from "./components/DishList";
import DishDetail from "./components/DishDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="nav-container">
          <div className="nav-content">
            <Link to="/" className="nav-logo">
              <HomeIcon className="h-5 w-5" /> Restaurant
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                <HomeIcon className="h-5 w-5 inline-block mr-2" /> Home
              </Link>
              <Link to="/users" className="nav-link">
                <UsersIcon className="h-5 w-5 inline-block mr-2" /> Users
              </Link>
              <Link to="/dishes" className="nav-link">
                <RestaurantIcon className="h-5 w-5 inline-block mr-2" /> Dishes
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/dish/:id" element={<DishDetail />} />
          <Route path="/dishes" element={<DishList />} />
          <Route
            path="/"
            element={
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <h2 style={{ color: "#2c3e50", fontSize: "2.5em" }}>
                  Welcome to my Restaurant
                </h2>
                <p
                  style={{
                    color: "#555",
                    fontSize: "1.2em",
                    marginTop: "10px",
                  }}
                >
                  Explore our delicious menu at{" "}
                  <Link to="/dishes" style={{ color: "#3498db" }}>
                    Dishes
                  </Link>{" "}
                  or check out our community at{" "}
                  <Link to="/users" style={{ color: "#3498db" }}>
                    Users
                  </Link>
                  .
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
