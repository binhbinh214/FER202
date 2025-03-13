import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../data/data";
import "../styles/UserDetail.css";

const UserDetail = () => {
  const { id } = useParams();
  const user = users[parseInt(id)];

  if (!user) {
    return <h3>User not found</h3>;
  }

  return (
    <div className="user-detail">
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.firstName} {user.lastName}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
    </div>
  );
};

export default UserDetail;
