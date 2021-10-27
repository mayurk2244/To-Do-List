import { useState } from "react";
import "./App.css";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";
import { TaskListContext } from "./components/TaskListContext";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NoteAltTwoToneIcon from "@mui/icons-material/NoteAltTwoTone";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";

function App() {
  const localTask = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  const [taskList, taskListUpdate] = useState(localTask);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TaskListContext.Provider value={{ taskList, taskListUpdate }}>
          <div className="card-holder">
            <Card >
              <CardContent>
                <Grid container direction="row" alignItems="-">
                  <Grid item>
                    <NoteAltTwoToneIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" component="div" color="primary">
                      To Do List
                    </Typography>
                  </Grid>
                </Grid>
                <TaskField />
                <TaskList />
              </CardContent>
            </Card>
          </div>
        </TaskListContext.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
