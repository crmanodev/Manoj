import React from "react";
import GlobalImport from "./GlobalImport";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter",
    },
  },
  palette: {
    primary: {
      main: "#363C90",
    },
    text: {
      primary: "#191932",
      secondary: "#EEEEFF",
    },
    secondary: {
      main: "#EEEEFF",
    },
    neutral: {
      main: "#FFBF86",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalImport />
      </ThemeProvider>
    </div>
  );
}

export default App;
