import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const totalValue = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      setIsPaymentSuccess(true);
      clearCart();
      setTimeout(() => setIsPaymentSuccess(false), 3000); // Ẩn thông báo sau 3 giây
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                <div>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn-rm btn-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total Items:</strong> {cartItems.length}
          </p>
          <p>
            <strong>Total Value:</strong> ${totalValue.toFixed(2)}
          </p>
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
          <button
            onClick={handleConfirmOrder}
            className="confirm-order-btn mt-3"
          >
            Confirm order
          </button>
        </div>
      )}

      {isPaymentSuccess && (
        <div className="payment-success mt-3">
          Order success! Thank you for your purchase.
        </div>
      )}

      <div className="cart-icon">
        <FaShoppingCart size={30} color="#333" />
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </div>
  );
};

export default Cart;
