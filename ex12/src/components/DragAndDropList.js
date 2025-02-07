import React, { useState } from "react";

function DragAndDropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems.splice(draggingItem, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Drag and Drop List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: draggingItem === index ? "#ddd" : "#f0f0f0",
              cursor: "move",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow:
                draggingItem === index ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
