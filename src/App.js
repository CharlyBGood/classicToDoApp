import "./App.css";
import LogoImg from "./components/LogoImg";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="todo-app">
      <LogoImg />
      <div className="todo-list-main">
        <h2 className="title-description">Save ideas, pending work, resources, etc.</h2>
        <TaskList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
