import "./App.css";
import LogoFcc from "./components/LogoFcc";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="todo-app">
      <LogoFcc />
      <div className="todo-list-main">
        <h1>NoStateNode</h1>
        <Todo 
        text="aprender react"
        />
      </div>
    </div>
  );
}

export default App;
