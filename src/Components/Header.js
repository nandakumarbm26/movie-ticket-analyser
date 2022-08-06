import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
function Header() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          MoTiZER
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button color="inherit" sx={{ font: "large" }}>
          HackWell
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
