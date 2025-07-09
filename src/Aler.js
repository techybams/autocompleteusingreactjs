import React, { useState } from "react";
import { Alert, Box } from "@mui/material";

const Aler = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      {show && (
        <Alert onClose={() => setShow(false)} severity="success">
          This is an alert
        </Alert>
      )}
    </Box>
  );
};

export default Aler;
