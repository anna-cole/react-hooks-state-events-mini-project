import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });
//CATEGORIES are the whole list of categories

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')
  //console.log(category) category is the selected category from the filter buttons

  function deleteTask(text) {
    const updatedList = tasks.filter(task => task.text !== text)
    setTasks(updatedList)
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleClick(category) {
    setCategory(category)
    //console.log(category)
  }

  const filteredTasks = tasks.filter(task => category === 'All' || category === task.category) 
  // Essa lista vai ser rendered independente de clicar no filtro

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} onClickCatButton={handleClick}/> 
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={CATEGORIES.filter(cat => cat !== 'All')}       onTaskFormSubmit={addTask}/>
        <TaskList tasks={filteredTasks} onClickDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
