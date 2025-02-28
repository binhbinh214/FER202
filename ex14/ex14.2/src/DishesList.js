import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const DishesList = ({ dishes }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dishes</h2>
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={dish.image} className="card-img-top" alt={dish.name} />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <p className="card-text">{dish.description}</p>
                <p className="card-text">
                  <strong>${dish.price}</strong>
                </p>
                <button onClick={() => addToCart(dish)} className="btn w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesList;
