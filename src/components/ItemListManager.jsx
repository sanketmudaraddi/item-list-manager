import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item"
        style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleAddItem} style={{ padding: "5px 10px", fontSize: "16px" }}>
        Add Item
      </button>
      <ul style={{ marginTop: "20px", fontSize: "18px" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
