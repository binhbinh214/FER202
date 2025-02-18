import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <div className="col-md-6 mb-4">
      <Card className="student-card" style={{ width: "40rem" }}>
        <Card.Img variant="top" src={student.avatar} alt={student.name} />
        <Card.Body>
          <Card.Title>{student.id}</Card.Title>
          <Card.Text>{student.name}</Card.Text>
          <Card.Text className="location-text">{student.location}</Card.Text>

          <div>
            <label htmlFor={`absent${student.id}`} className="me-2">
              Absent
            </label>
            <input
              type="radio"
              id={`absent${student.id}`}
              name={`status${student.id}`}
            />
            <label htmlFor={`present${student.id}`} className="ms-3 me-2">
              Present
            </label>
            <input
              type="radio"
              id={`present${student.id}`}
              name={`status${student.id}`}
            />
          </div>

          <Button variant="primary" className="mt-3">
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentCard;
