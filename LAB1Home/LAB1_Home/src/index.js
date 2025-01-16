import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng ReactDOM từ "react-dom/client"
import App from "./components/App";

// Tìm phần tử root
const rootElement = document.getElementById("root");
// Tạo root và render ứng dụng
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
