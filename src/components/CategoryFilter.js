import React from "react";

function CategoryFilter({ categories, onClickFilterTasks }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(cat => 
      <button key={cat} onClick={() => onClickFilterTasks(cat)}>{cat}</button>)}
    </div>
  );
}

export default CategoryFilter;
