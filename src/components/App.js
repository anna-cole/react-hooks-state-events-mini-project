import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)

  function handleDelete(text) {
    const updatedList = tasks.filter(task => task.text !== text)
    setTasks(updatedList)
  }

  const taskCat = tasks.map(task => {return task.category})

  function handleFilter(cat) {
    console.log(cat)
    
  }
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onClickFilterTasks={handleFilter}/>
      <NewTaskForm />
      <TaskList tasks={tasks} onClickDelete={handleDelete} />
    </div>
  );
}

export default App;
