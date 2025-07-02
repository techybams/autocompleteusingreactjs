import React, { useState } from "react";
import { Tabs, Tab, Toolbar, AppBar } from "@mui/material";

const Navbar = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar style={{ marginTop: "200px" }}>
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="first" />
            <Tab label="second" />
            <Tab label="third" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
