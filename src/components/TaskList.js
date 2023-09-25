import React from "react";
import Task from './Task'

function TaskList({ tasks, onClickDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(task => 
        <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onClickDelete}
        />
      )}
    </div>
  );
}

export default TaskList;
