import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

const Mode = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>This is a modal sample</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Click Me!
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Mode;
