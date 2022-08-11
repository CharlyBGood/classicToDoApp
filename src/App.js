import "./App.css";
import LogoFcc from "./components/LogoFcc";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="todo-app">
      <LogoFcc />
      <div className="todo-list-main">
        <h1>NoStateNode</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
