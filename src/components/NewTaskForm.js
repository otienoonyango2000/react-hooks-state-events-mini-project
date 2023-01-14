import React from "react";

function NewTaskForm({categories, addTask}) {
  function handleSubmit(e) {
    e.preventDefault();
    //
    // alert(e.target.text+"\n"+e.target.category.value)
    const newTask = {
      text: e.target.text.value,
      category: e.target.category.value
    }
    addTask(newTask)
    e.target.reset()
  }
  

  return (
    
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {
            categories.map(category => {
              if(category === "All") {
                return null
              } else{
                return <option key={category}>{category}</option>
              }
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
