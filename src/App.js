import "./App.css";
import LogoImg from "./components/LogoImg";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="todo-app">
      <LogoImg />
      <div className="todo-list-main">
        <h1>NoStateNode</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
