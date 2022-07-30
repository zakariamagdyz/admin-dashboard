import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  const darkMode = "ON";
  const theme = useMemo(() => getTheme(darkMode), [darkMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
