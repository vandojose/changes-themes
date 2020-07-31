import React from "react";

import { ThemeProvider } from "styled-components";

import Button from "./components/Button";
import Loading from "./components/Loading";
import { GlobalStyles } from "./theme/global";
import { defaultTheme, darkTheme } from "./theme/theme";
import { useDarkMode } from "./utils/useThemeChange";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "defaultTheme" ? defaultTheme : darkTheme;
  if (!componentMounted) {
    return <Loading />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Button theme={theme} toggleTheme={toggleTheme} />
        <h1>Tema {theme === "defaultTheme" ? "padrão" : "dark"}</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
