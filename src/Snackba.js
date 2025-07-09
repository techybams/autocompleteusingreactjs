import React, { useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material";

const Snackba = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Snackbar
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        open={open}
      >
        <Alert severity="success">This is a success message</Alert>
      </Snackbar>
    </Box>
  );
};

export default Snackba;
