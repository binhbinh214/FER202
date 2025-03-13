import React from "react";
import { Link } from "react-router-dom";
import { users } from "../data/data";
import { FaUser } from "react-icons/fa";
import "../styles/UserList.css";

const UserList = () => {
  return (
    <div className="user-list">
      <h2>Our Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/user/${index}`}>
              <FaUser className="h-4 w-4" /> {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
