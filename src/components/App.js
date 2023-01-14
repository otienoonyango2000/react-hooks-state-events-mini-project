import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const idArr = TASKS.map((task, index)=>{
    return {...task, id: index}
  })

  const [category, setCategory] = useState("All")
  const [tasks, setTask] = useState(idArr);

  // setTasks{[...tasks,newTask]}
  
  function addTask(newTask){
    setTask([newTask, ...tasks]);
  }

  function removeTask(id){
    
    let newTask=tasks.filter(task=>{
      if(task.id===id){
        return false
      } else{
        return true
      }
    })
    setTask(newTask)
  }

  const taskToDisplay = tasks.filter((task)=>{
    
      if(category === "All"){
        return true;
      } else{
        return category === task.category
      }
    
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm addTask={addTask} categories={CATEGORIES}/>
      <TaskList removeTask={removeTask} tasks = {taskToDisplay}/>

    </div>
  );
}

export default App;
