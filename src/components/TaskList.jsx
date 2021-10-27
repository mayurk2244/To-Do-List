import { TaskListContext } from "./TaskListContext";
import { useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CancelSharpIcon from "@mui/icons-material/CancelRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function TaskField() {
  const { taskList, taskListUpdate } = useContext(TaskListContext);
  const taskListCheck = taskList.map((t) => t.isDone);
  const [taskListStatus, setTaskListChecked] = useState([taskListCheck]);

  const toggleTaskStatus = (index) => {
    let newStatuses = [...taskListCheck];
    newStatuses[index] = !newStatuses[index];
    setTaskListChecked(newStatuses);
    let newTaskList = [...taskList];
    newTaskList[index].isDone = newStatuses[index];
    taskListUpdate(newTaskList);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  if (taskList.length > 0) {
    return (
      <div className="taskList">
        <Grid mt={2}>
          <Grid item>
            <List>
              {taskList.map((task, index) => {
                return (
                  <ListItem
                    key={index}
                    style={{
                      textDecoration: task.isDone ? "line-through" : "none",
                    }}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          let newList = [...taskList];
                          if (index !== -1) {
                            newList.splice(index, 1);
                            taskListUpdate(newList);
                          }
                        }}
                      >
                        <CancelSharpIcon />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      dense
                      onClick={() => {
                        toggleTaskStatus(index);
                      }}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={taskListCheck[index]}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{
                            "aria-labelledby": `checkbox-${index}`,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText id={index} primary={task.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        mt={3}
        color="secondary"
      >
        <Grid item>
          <PriorityHighRoundedIcon />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            No task found. Add task to list
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
export default TaskField;
