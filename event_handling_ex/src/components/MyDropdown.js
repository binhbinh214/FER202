import React, { useState } from "react";
import { Dropdown, DropdownButton, Card } from "react-bootstrap";

function MyDropdown() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey, event) => {
    setSelectedItem(event.target.innerText);
  };

  return (
    <div className="mb-4">
      <h3>Ví dụ 3: Dropdown</h3>
      <Card>
        <Card.Body>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem || "Select an item"}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
            <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
          </DropdownButton>
          {selectedItem && (
            <div className="mt-2">
              <p>You selected: {selectedItem}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyDropdown;
