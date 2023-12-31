import React from "react";

const Dropdown = ({ categories, onCategoryChange }) => {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
