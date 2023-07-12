import React from "react";
import { useState } from "react";
import AddTodoStyles from "./add-todo.module.css";
import { TextField, Button, Stack } from "@mui/material";

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
      <div className={AddTodoStyles.container}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <TextField
            value={newTodo}
            id="outlined-basic"
            label="Add NewTodo"
            variant="outlined"
            placeholder="Add new todo"
            onChange={handleChange}
            onKeyDown={checkEnter}
          />
          <Button variant="contained" onClick={handleClick}>
            Add Todo
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default AddTodo;
