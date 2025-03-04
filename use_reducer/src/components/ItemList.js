import React, { useReducer, useState } from "react";
import { Button, Form, Card, ListGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    default:
      return state;
  }
}

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, { items: [] });
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [sortType, setSortType] = useState("none");
  const [filterText, setFilterText] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = {
        id: Date.now(),
        name: newItemName,
        created: Date.now(),
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => dispatch({ type: "REMOVE_ITEM", id });

  const handleEditItem = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, name: editName });
    setEditId(null);
    setEditName("");
  };

  const sortedItems = () => {
    let items = [...state.items];
    if (sortType === "alphabetical") {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "created") {
      return items.sort((a, b) => a.created - b.created);
    }
    return items;
  };

  const filteredItems = sortedItems().filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Card className="p-4">
      <div className="item-list-container">
        <Form>
          <Form.Group controlId="formItem">
            <Form.Label>Enter Item:</Form.Label>
            <Form.Control
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter item name"
            />
          </Form.Group>
          <Button onClick={handleAddItem} className="mt-2">
            Add Item
          </Button>
        </Form>

        <Form.Group controlId="formFilter" className="mt-3">
          <Form.Label>Filter Items:</Form.Label>
          <Form.Control
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Search items"
          />
        </Form.Group>

        <Form.Group controlId="formSort" className="mt-3">
          <Form.Label>Sort By:</Form.Label>
          <Form.Control
            as="select"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="none">None</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="created">Created Time</option>
          </Form.Control>
        </Form.Group>

        <h3 className="mt-4">Item List:</h3>
        <ListGroup>
          {filteredItems.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              {editId === item.id ? (
                <>
                  <Form.Control
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <Button
                    variant="success"
                    onClick={() => handleSaveEdit(item.id)}
                    className="ms-2"
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  {item.name}
                  <div>
                    <Button
                      variant="warning"
                      onClick={() => handleEditItem(item.id, item.name)}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Card>
  );
}

export default ItemList;
