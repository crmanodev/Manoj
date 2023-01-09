import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const useTabStyles = makeStyles({
    root: {
      justifyContent: "center",
    },
    scroller: {
      flexGrow: "0",
    },
  });

  const classes = useTabStyles();
  return (
    <Box sx={{ align: "center" }}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="ALL" />
          <Tab label="APPAREL" />
          <Tab label="ELECTRONICS" />
          <Tab label="FOOTWARE" />
          <Tab label="PERSONAL CARE" />
        </Tabs>
      </Paper>
    </Box>
  );
}
