import React, { useState } from "react";
import { CartProvider } from "./CartContext";
import DishesList from "./DishesList";
import Cart from "./Cart";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    price: "4.99",
    image: "images/uthappizza.jpg",
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza...",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    price: "1.99",
    image: "images/Zucchipakoda.jpg",
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter...",
  },
  {
    id: 2,
    name: "Vadonut",
    price: "1.99",
    image: "images/Vadonut.jpg",
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    price: "2.99",
    image: "images/Elaicheese cake.jpg",
    description: "A delectable, semi-sweet New York Style Cheese Cake...",
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <CartProvider>
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="theme-slider">
          <FaSun className="theme-icon sun" />
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
          <FaMoon className="theme-icon moon" />
        </div>
        <div className="container">
          <h1 className="restaurant-title text-center mb-4">Restaurant Menu</h1>
          <div className="search-bar mb-4">
            <input
              type="text"
              placeholder="Search meal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
          <DishesList dishes={filteredDishes} />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
