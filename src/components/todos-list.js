import React from "react";
import Todo from "./todo";
import TickIcon from "./tick.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const TodosList = ({ markTodoAsDone, todos }) => {
  const [expanded, setExpanded] = useState(true);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      {markTodoAsDone && (
        <Accordion
          sx={{ width: "350px", marginBottom: "30px" }}
          expanded={expanded}
          onChange={handleChange}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={(event) => event.stopPropagation()}
            // onClick={handleChange()}
          >
            <Typography>Get It Done</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {todos.map((todo, index) => {
              return (
                <Todo
                  isComplete={false}
                  key={index}
                  index={index}
                  todo={todo}
                  actionIcon={TickIcon}
                  handleAction={markTodoAsDone}
                />
              );
            })}
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default TodosList;
