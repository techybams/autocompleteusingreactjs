import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";

const Ratin = () => {
  const [value, setValue] = useState();
  return (
    <Box>
      <Rating
        precision={0.1}
        value={value}
        onChange={(e, val) => setValue(val)}
      />
      <Typography>Rated {value !== undefined ? value : 0} Stars</Typography>
    </Box>
  );
};

export default Ratin;
