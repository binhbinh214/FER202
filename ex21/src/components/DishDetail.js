import React from "react";
import { useParams, Link } from "react-router-dom";
import { dishes } from "../data/data";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import "../styles/DishDetail.css";

const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return <h3>Dish not found</h3>;
  }

  return (
    <div className="dish-detail">
      <h2>{dish.name}</h2>
      <img src={dish.image} alt={dish.name} />
      <p>
        <strong>Category:</strong> {dish.category}
      </p>
      <p>
        <strong>Label:</strong> {dish.label || "None"}
      </p>
      <p>
        <strong>Price:</strong> ${dish.price}
      </p>
      <p>
        <strong>Description:</strong> {dish.description}
      </p>
      <Link to="/dishes" className="back-button">
        <ArrowLeftIcon className="h-4 w-4 inline-block icon" /> Back to Menu
      </Link>
    </div>
  );
};

export default DishDetail;
