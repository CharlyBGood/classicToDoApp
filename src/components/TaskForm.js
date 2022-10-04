import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/TaskForm.css";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form className="task-form" onSubmit={handleSend}>
      <input
        className="task-input"
        type="text"
        placeholder="Write a Task"
        name="text"
        onChange={handleChange}
      />
      <button className="task-btn">Add</button>
    </form>
  );
}

export default TaskForm;
