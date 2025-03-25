import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "../style/AddProduct.css";

const AddProduct = ({ user }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    status: "available",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  // Kiểm tra quyền admin và đăng nhập
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }
    if (user?.role?.toLowerCase() !== "admin") {
      navigate("/shop", { replace: true });
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    try {
      const price = parseFloat(newProduct.price);
      if (price < 0) {
        setFormError("Price cannot be less than 0!");
        setIsSubmitting(false);
        return;
      }

      const productToAdd = {
        name: newProduct.name,
        category: newProduct.category,
        price: price,
        image: newProduct.image || "/products/default-product.jpg",
        status: newProduct.status,
      };

      await axios.post("http://localhost:3001/products", productToAdd);
      alert("Product added successfully!");
      navigate("/shop");
    } catch (error) {
      console.error(
        "Lỗi khi thêm sản phẩm:",
        error.response || error.message || error
      );
      setFormError(
        `Failed to add product: ${
          error.response?.data?.message || error.message || "Unknown error"
        }. Please try again.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/shop");
  };

  return (
    <Container className="add-product-page mt-5">
      <h2 className="text-center mb-4">Add New Product</h2>
      <div className="add-product-form-container">
        <Form onSubmit={handleAddProduct}>
          {formError && <Alert variant="danger">{formError}</Alert>}
          <Form.Group className="mb-3 form-group-custom">
            <Form.Label className="form-label-custom">Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Example: Nintendo Switch OLED Model"
              required
              className="form-control-custom"
            />
          </Form.Group>
          <Form.Group className="mb-3 form-group-custom">
            <Form.Label className="form-label-custom">Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              placeholder="Example: console"
              required
              className="form-control-custom"
            />
          </Form.Group>
          <Form.Group className="mb-3 form-group-custom">
            <Form.Label className="form-label-custom">Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Example: 349.99"
              min="0"
              step="0.01"
              required
              className="form-control-custom"
            />
          </Form.Group>
          <Form.Group className="mb-3 form-group-custom">
            <Form.Label className="form-label-custom">Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              placeholder="Example: /products/nintendo-switch-oled.jpg"
              className="form-control-custom"
            />
            {newProduct.image && (
              <div className="image-preview mt-2">
                <img
                  src={newProduct.image}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    borderRadius: "8px",
                  }}
                  onError={(e) =>
                    (e.target.src = "/products/default-product.jpg")
                  }
                />
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-4 form-group-custom">
            <Form.Label className="form-label-custom">Status</Form.Label>
            <Form.Select
              name="status"
              value={newProduct.status}
              onChange={handleInputChange}
              required
              className="form-control-custom"
            >
              <option value="available">Available</option>
              <option value="upcoming">Coming Soon</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="cancel-btn"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Product"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

AddProduct.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default AddProduct;
