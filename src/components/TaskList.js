import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { ConfirmationModal } from "./ConfirmationModal";
import "../stylesheets/TaskList.css";
import { useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksActual = [task, ...tasks];
      setTasks(tasksActual);
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    setTaskToDelete(id);
    setIsModalHidden(false);
  };

  const cancelDelete = () => {
    setIsModalHidden(true);
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    setIsModalHidden(true);
    setTaskToDelete(null);
  };

  const completeTask = (id) => {
    const tasksActual3 = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(tasksActual3);
  };

  return (
    <>
      <TaskForm createInput={addTask} />
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
      <ConfirmationModal
        onDeleteCancel={cancelDelete}
        onDeleteConfirm={confirmDelete}
        isHidden={isModalHidden}
      ></ConfirmationModal>
    </>
  );
}

export default TaskList;
