import React from "react";
import "../stylesheets/TaskForm.css";

function TaskForm(props) {
  return (
    <form className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="Share a resource"
        name="text"
      />
      <button className="task-btn">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
