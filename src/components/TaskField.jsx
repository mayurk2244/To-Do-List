import { useContext, useState, useEffect } from "react";
import { TaskListContext } from "./TaskListContext";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import Grid from "@mui/material/Grid";

function TaskField() {
  const [taskInput, setTaskInput] = useState("");
  const { taskList, taskListUpdate } = useContext(TaskListContext);
  const [isError, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (taskInput) {
          let newTask = {
            name: taskInput,
            isDone: false,
          };
          setError(false);
          setTaskInput("");
          taskListUpdate((list) => [...list, newTask]);
        } else {
          setError(true);
        }
      }}
    >
      <Grid container mt={2}>
        <Grid item  sm={11}>
          <TextField
            fullWidth
            id="task-input"
            onInput={(e) => setTaskInput(e.target.value)}
            value={taskInput}
            error={isError}
            label="what needs to be done ?"
            variant="standard"
          />
        </Grid>
        <Grid item sm={1}>
          <IconButton
            aria-label="add-new"
            size="large"
            color="primary"
            type="button"
            onClick={() => {
              if (taskInput) {
                let newTask = {
                  name: taskInput,
                  isDone: false,
                };
                setError(false);
                taskListUpdate((list) => [...list, newTask]);
                setTaskInput("");
              } else {
                setError(true);
              }
            }}
          >
            <AddCircleSharpIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
}
export default TaskField;
