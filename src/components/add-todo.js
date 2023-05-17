import React from "react";
import { useState } from "react";
import AddTodoStyles from "./add-todo.module.css";

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => setNewTodo(e.target.value);

  const handleClick = () => {
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  function checkEnter(event) {
    if (event.keyCode === 13 || event.which === 13) handleClick();
  }

  return (
    <div className={AddTodoStyles.container}>
      <input
        value={newTodo}
        className={AddTodoStyles.todoInput}
        placeholder="Add new todo"
        onChange={handleChange}
        onKeyDown={checkEnter}
      />
      <button className={AddTodoStyles.addTodoButton} onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
