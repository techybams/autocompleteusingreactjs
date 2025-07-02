import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button variant="contained" color="warning">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
