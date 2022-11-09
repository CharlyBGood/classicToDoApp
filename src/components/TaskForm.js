import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/TaskForm.css";

function TaskForm({createInput}) {
  const [input, setInput] = useState("");
  

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSend = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false,
    };
    createInput(newTask);
    setInput("");
    // props.onSubmit(newTask);
  };

  return (
    <form id="form" className="task-form" onSubmit={handleSend}>
      <input
        className="task-input"
        type="text"
        placeholder="Write a Task"
        value={input}
        name="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="task-btn">Add</button>
    </form>
  );
}

export default TaskForm;
