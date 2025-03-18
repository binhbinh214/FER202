import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button, Image, Row, Col } from "react-bootstrap";
import {
  FaArrowLeft,
  FaDollarSign,
  FaTag,
  FaBox,
  FaInfoCircle,
} from "react-icons/fa";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/Products/${id}`
        );
        if (response.data) {
          setProduct(response.data);
          setError("");
        } else {
          setError("Sản phẩm không tồn tại!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
        setError("Không thể tải sản phẩm. Vui lòng kiểm tra kết nối hoặc ID!");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return (
      <Container className="mt-5">
        <div className="alert alert-danger">{error}</div>
        <Button
          variant="primary"
          onClick={() => navigate("/products")}
          className="back-btn"
        >
          <FaArrowLeft className="me-2" /> Quay lại danh sách sản phẩm
        </Button>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="mt-5">
        <div className="alert alert-warning">Không tìm thấy sản phẩm!</div>h
        <Button
          variant="primary"
          onClick={() => navigate("/products")}
          className="back-btn"
        >
          <FaArrowLeft className="me-2" /> Quay lại danh sách sản phẩm
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="product-detail-card">
        <Row className="g-0 align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <div className="image-container">
              <Image
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="mb-4">{product.name}</Card.Title>
              <Card.Text className="info-item">
                <FaDollarSign className="me-2 text-primary" />
                <strong>Giá:</strong>
                <span className="info-content">{product.price}</span>
              </Card.Text>
              <Card.Text className="info-item">
                <FaTag className="me-2 text-primary" />
                <strong>Danh mục:</strong>
                <span className="info-content">{product.category}</span>
              </Card.Text>
              <Card.Text className="info-item">
                <FaBox className="me-2 text-primary" />
                <strong>Tồn kho:</strong>
                <span className="info-content">{product.stock}</span>
              </Card.Text>
              <Card.Text className="info-item">
                <FaInfoCircle className="me-2 text-primary" />
                <strong>Mô tả:</strong>
                <span className="info-content">{product.description}</span>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/products")}
                className="mt-3 back-btn"
              >
                <FaArrowLeft className="me-2" /> Quay lại danh sách sản phẩm
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetail;
