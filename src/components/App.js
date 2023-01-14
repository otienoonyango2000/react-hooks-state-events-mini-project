import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const taskDelete = TASKS.map(()=>{})
  const [category, setCategory] = useState("All")
  const [tasks, setTask] = useState(TASKS);

  // setTasks{[...tasks,newTask]}
  
  function addTask(newTask){
    setTask([newTask, ...tasks]);
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
      <TaskList tasks = {taskToDisplay}/>

    </div>
  );
}

export default App;
