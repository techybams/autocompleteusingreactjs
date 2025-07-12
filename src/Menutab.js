import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
const Menutab = () => {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };
  return (
    <div style={{ marginBottom: "100px" }}>
      <Button variant="contained" onClick={handleClick}>
        Open Menu
      </Button>
      <Button onClick={handleClick}>Open Menu Again</Button>
      <Button variant="contained" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Menutab;
