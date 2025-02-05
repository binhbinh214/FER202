import { Row, Col, Form, Button } from "react-bootstrap";

function ReservationForm() {
  return (
    <div className="container p-5">
      <h2 className="Bookings text-center mt-3 mb-4">Book your table</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your name *" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Your email *" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formServer">
              <Form.Control as="select" defaultValue="Select a Service">
                <option>Select a Service</option>
                <option>Service 1</option>
                <option>Service 2</option>
                <option>Service 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formTextArea">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please write your requests"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ReservationForm;
