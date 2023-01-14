import { update } from "lodash";
import React from "react";

function CategoryFilter({categories, setCategory}) {
  function toggleSelection(e){
    const buttons = Array.from(document.querySelectorAll(".buttons"))
    buttons.forEach(button => {
      button.classList.remove("selected");

    });
    e.target.classList.add("selected");
    let category = e.target.textContent
    setCategory(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>

      {categories.map((category, index)=>{
        return <button className="buttons" onClick={toggleSelection} key={index}>{category}</button>
      })}
        
    </div>
  );
}

export default CategoryFilter;
