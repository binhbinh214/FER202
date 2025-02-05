import { Card, Button } from "react-bootstrap";
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";

function CardComponent() {
  return (
    <div className="container p-5">
      <h1 className="Menu text-left p-3">Our Menu</h1>
      <div className="d-flex">
        <Card style={{ width: "18rem" }} className="mx-3 position-relative">
          <Card.Img variant="top" src={menu1} />
          <div
            className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 px-2 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            SALE
          </div>
          <Card.Body>
            <Card.Title>Margenrita Pizza</Card.Title>
            <Card.Text style={{ color: "orange" }}>
              <s style={{ color: "Gray" }}>$40.00</s> $24.00
            </Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 position-relative">
          <Card.Img variant="top" src={menu2} />
          <Card.Body>
            <Card.Title>Mushroom Pizza</Card.Title>
            <Card.Text>$25.00</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 position-relative">
          <Card.Img variant="top" src={menu3} />
          <div
            className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 px-2 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            NEW
          </div>
          <Card.Body>
            <Card.Title>Hawaiian Pizza</Card.Title>
            <Card.Text>$30.00</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 position-relative">
          <Card.Img variant="top" src={menu4} />
          <div
            className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 px-2 py-1"
            style={{ fontSize: "0.9rem" }}
          >
            SALE
          </div>
          <Card.Body>
            <Card.Title>Pesto Pizza</Card.Title>
            <Card.Text style={{ color: "orange" }}>
              <s style={{ color: "Gray" }}>$50.00</s> $30.00
            </Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
