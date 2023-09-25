import React from "react";

function CategoryFilter({ categories, category, onClickCatButton }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(cat => {
        const className = cat === category ? 'selected': null
        //console.log(category)
        //console.log(cat)
        return (
          <button key={cat} className={className} onClick={() => onClickCatButton(cat)}>{cat}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
