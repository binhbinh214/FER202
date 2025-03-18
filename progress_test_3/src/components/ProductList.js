import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaShoppingCart, FaEye } from "react-icons/fa"; 
import "../styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/Products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!products || products.length === 0) {
    return <div>Không có sản phẩm nào!</div>;
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card h-100">
              <div className="image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{product.name}</Card.Title>
                <Card.Text className="description flex-grow-1">
                  {product.description}
                </Card.Text>
                <Card.Text className="price text-center">
                  {product.price}
                </Card.Text>
                <Button variant="primary" className="w-100 mb-2 buy-now-btn">
                  <FaShoppingCart className="me-2" /> Buy Now
                </Button>
                <Button
                  variant="info"
                  className="w-100 view-details-btn"
                  as={Link}
                  to={`/product/${product.id}`}
                >
                  <FaEye className="me-2" /> View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
