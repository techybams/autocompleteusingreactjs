import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Dial = () => {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>This is my Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A dialog is a popup window which can ask users about an information
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Agree</Button>
        </DialogActions>
      </Dialog>

      <Button onClick={() => setOpened(true)}>Open Dialog</Button>
      <Dialog open={opened} onClose={() => setOpened(false)}>
        <DialogTitle>This is my second Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A dialog is a popup window which can ask users about an information
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpened(false)}>Cancel</Button>
          <Button onClick={() => setOpened(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dial;
