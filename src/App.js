import { useState } from "react";
import TodosList from "./components/todos-list";
import AddTodo from "./components/add-todo";
import "./App.css";
import CompletedTodos from "./components/completed-todos";
import {
  Typography,
  Toolbar,
  CssBaseline,
  AppBar,
  Container,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";

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
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <ListIcon />
          <Typography variant="h6" align="center">
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="md" sx={{ marginTop: "50px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              sx={(theme) => ({ color: theme.palette.primary.main })}
            >
              TodosListApp
            </Typography>
            <div className="App">
              <AddTodo addTodo={addTodo} />
              <CompletedTodos
                completedTodos={completedTodos}
                removeTodo={removeTodo}
              />
              <TodosList todos={todos} markTodoAsDone={markTodoAsDone} />
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
