import React from "react";
import Todo from "./todo";
import DeleteIcon from "./delete.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CompletedTodos = ({ removeTodo, completedTodos }) => {
  return (
    <div>
      <Accordion sx={{ width: "350px", marginBottom: "30px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CompletedTodos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {completedTodos.map((todo, index) => {
            return (
              <div>
                <Todo
                  isComplete
                  key={index}
                  index={index}
                  todo={todo}
                  handleAction={removeTodo}
                  actionIcon={DeleteIcon}
                />
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CompletedTodos;
