import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../stylesheets/TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksActual = [task, ...tasks];
      setTasks(tasksActual);
    }
  };

  const deleteTask = id => {
    const tasksActual2 = tasks.filter(task => task.id !== id);
    setTasks(tasksActual2);
  }

  const completeTask = id => {
    const tasksActual3 = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(tasksActual3);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            complete={task.complete}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
