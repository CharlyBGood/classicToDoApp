import React from "react";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, complete, completeTask, deleteTask }) {
  return (
    <div className={complete ? "todo-container complete" : "todo-container"}>
      <div 
      className="todo-txt" 
      onClick={() => completeTask(id)}>
        {text}
      </div>
      <div 
      className="todo-container-icons" 
      onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="todo-icon" />
      </div>
    </div>
  );
}

export default Task;
