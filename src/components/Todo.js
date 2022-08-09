import React from "react";
import "../stylesheets/Todo.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Todo({ text }) {
  return (
    <div className="todo-container">
      <div className="todo-txt">{text}</div>
      <div className="todo-icon"><AiOutlineCloseCircle /></div>
    </div>
  );
}

export default Todo;
