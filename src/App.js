import "./App.css";
import LogoFcc from "./components/LogoFcc";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// import Todo from "./components/Todo";

function App() {
  return (
    <div className="todo-app">
      <LogoFcc />
      <div className="todo-list-main">
        <h1>NoStateNode</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
