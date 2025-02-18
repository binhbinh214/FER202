import React from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import "./App.css";
const App = () => {
  const students = [
    {
      id: "DE160132",
      name: "Nguyễn Hữu Quốc Khánh",
      avatar: "/images/Studen1.png",
      location: "DaNang",
    },
    {
      id: "DE160137",
      name: "Choy Vĩnh Thiện",
      avatar: "/images/Student2.png",
      location: "QuangNam",
    },
    {
      id: "DE160547",
      name: "Đỗ Nguyên Phúc",
      avatar: "/images/Student3.png",
      location: "QuangNam",
    },
    {
      id: "DE170089",
      name: "Lê Hoàng Minh",
      avatar: "/images/Student4.png",
      location: "DaNang",
    },
  ];

  return (
    <>
      <Header />
      <Container className="mt-5">
        <h2 className="text-center mb-5">Students Detail</h2>
        <Row>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;
