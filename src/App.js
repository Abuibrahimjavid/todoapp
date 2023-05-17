import { useState } from "react";
import TodosList from "./components/todos-list";
import AddTodo from "./components/add-todo";
import "./App.css";
import CompletedTodos from "./components/completed-todos";
function App() {
  const [todos, setTodos] = useState(["Learn React", "Build Apps"]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const filteredTodos = completedTodos.filter((todo, i) => index !== i);
    setCompletedTodos(filteredTodos);
  };

  const markTodoAsDone = (index) => {
    const todoToBeMarked = todos[index];
    const filteredTodos = todos.filter((todo, i) => index !== i);
    setCompletedTodos([...completedTodos, todoToBeMarked]);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <CompletedTodos completedTodos={completedTodos} removeTodo={removeTodo} />
      <TodosList todos={todos} markTodoAsDone={markTodoAsDone} />
    </div>
  );
}

export default App;
