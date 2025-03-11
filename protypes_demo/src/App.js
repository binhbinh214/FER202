import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <Container className="app-container">
      <h1>PropTypes Examples</h1>
      <Tabs defaultActiveKey="example1" id="prop-types-tabs" className="mb-3">
        <Tab eventKey="example1" title="Ví dụ 1: UserProfile">
          <div className="tab-content">
            <UserProfile name="Nguyễn Văn A" age={25} />
            <UserProfile name="" age={25} />
            <UserProfile name="Nguyễn Văn B" age="twenty five" />
            <UserProfile name="Nguyễn Văn C" age={null} />
          </div>
        </Tab>

        <Tab eventKey="example2" title="Ví dụ 2: UserProfile2 (Form)">
          <div className="tab-content">
            <UserProfile2
              name="Nguyễn Văn A"
              age={25}
              onSubmit={handleFormSubmit}
            />
          </div>
        </Tab>

        <Tab eventKey="example3" title="Ví dụ 3: MyForm">
          <div className="tab-content">
            <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
          </div>
        </Tab>

        <Tab eventKey="example4" title="Ví dụ 4: RegistrationForm">
          <div className="tab-content">
            <RegistrationForm onSubmit={handleFormSubmit} />
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default App;
