import React, { useState } from "react";
import { Box, Button, List, ListItemButton, ListItemText } from "@mui/material";
import { Drawer } from "@mui/material";

const arrOptions = ["Profile", "Balance", "Logout"];
const Draw = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {arrOptions.map((elm) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={elm} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Draw;
