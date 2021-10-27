import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NoteAltTwoToneIcon from "@mui/icons-material/NoteAltTwoTone";

export default function HeaderComponent() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            <NoteAltTwoToneIcon />
            <b>To Do List</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
