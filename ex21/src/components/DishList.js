import React from "react";
import { Link } from "react-router-dom";
import { dishes } from "../data/data";
import "../styles/DishList.css";

const DishList = () => {
  return (
    <div className="dish-list">
      <h2>Our Menu</h2>
      <div className="dish-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-item">
            <img src={dish.image} alt={dish.name} />
            <div className="dish-item-content">
              <h3>{dish.name}</h3>
              <Link to={`/dish/${dish.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishList;
