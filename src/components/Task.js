import React from "react";


function Task({text, category, removeTask, taskId}) {

  function handleDelete(event){
    removeTask(taskId)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
