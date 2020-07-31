import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("defaultTheme");

  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "defaultTheme") {
      setMode("darkTheme");
    } else {
      setMode("defaultTheme");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: darkTheme)").matches &&
    !localTheme
      ? setMode("darkTheme")
      : localTheme
      ? setTheme(localTheme)
      : setMode("defaultTheme");
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
