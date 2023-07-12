import React from "react";
import TodosStyles from "./todos.module.css";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const { todoWrapper, todoLabel } = TodosStyles;

const Todo = ({ todo, handleAction, index, isComplete }) => {
  return (
    <div className={`${todoWrapper}`}>
      <Typography
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
        className={todoLabel}
      >
        {todo}
      </Typography>
      {isComplete ? (
        <DeleteIcon
          alt="todo-action"
          onClick={() => handleAction(index)}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
            },
          }}
        />
      ) : (
        <CheckCircleOutlineOutlinedIcon
          alt="todo-action"
          onClick={() => handleAction(index)}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "green",
            },
          }}
        />
      )}
    </div>
  );
};
export default Todo;
