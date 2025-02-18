import React from "react";
import { CartProvider } from "./CartContext";
import DishesList from "./DishesList";
import Cart from "./Cart";
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
  return (
    <CartProvider>
      <DishesList dishes={dishes} />
      <Cart />
    </CartProvider>
  );
};

export default App;
