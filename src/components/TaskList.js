import React from "react";
import Task from "./Task";
import { useState } from "react";


function TaskList({tasks}) {
  
  

  return (
    <div className="tasks">
      {
        tasks.map((task, index)=>{
          return <Task key={index}text={task.text} category={task.category}/>
        })
      }

    </div>
  );
}

export default TaskList;
