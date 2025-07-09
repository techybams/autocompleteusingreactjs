import React from "react";
import { Box, CircularProgress, LinearProgress } from "@mui/material";

const Progres = () => {
  return (
    <Box>
      <CircularProgress variant="determinate" value={10} />
      <LinearProgress variant="determinate" value={50} />
    </Box>
  );
};

export default Progres;
