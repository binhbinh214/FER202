import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function MyAlert() {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleAlertClose = () => setShow(false);

  return (
    <div className="mb-4">
      <h3>Ví dụ 2: Alert</h3>
      <Button onClick={handleButtonClick}>Show Alert</Button>
      {show && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert!</p>
        </Alert>
      )}
    </div>
  );
}

export default MyAlert;
