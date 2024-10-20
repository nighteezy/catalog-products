import React from "react";
import "./Search.css";

const FilterInput = ({ filter, setFilter }) => (
  <input
    className="search"
    type="text"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    placeholder="Поиск"
  />
);

export default FilterInput;
