import { AddTodo } from "./components/AddTodo";
import { Navbar } from "./components/Navbar";
import { Todos } from "./components/Todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h2>TODO REACT + TYPESCRIPT</h2>
      <Navbar></Navbar>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </main>
  );
};

export default App;
