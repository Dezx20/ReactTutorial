import "./App.css";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Complete React tutorial" />
      <Todo text="Work on some Project" />
    </div>
  );
}

export default App;
