import React, { useState } from "react";
import "../style/SearchFilter.css";

const SearchFilter = () => {
  const [query, setQuery] = useState("");

  const items = ["React", "Python", "JavaScript", "PHP", "Angular", "Jquery"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container-search">
      <div className="search-container">
        <label className="label">Search:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
      </div>
      <ul className="list">
        {filteredItems.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
