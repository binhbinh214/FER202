import React, { useState } from "react";
import "../style/DragAndDropList.css";
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
    <div className="container">
      <h1>Drag and Drop List</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            className={draggingItem === index ? "dragging" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
