import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeDarkMode, setThemeDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
        const theme = themeDarkMode ? "dark" : "light";
        localStorage.setItem("theme", theme);

        document.body.className = theme;
  }, [themeDarkMode]);

  return (
    <ThemeContext.Provider value={{ themeDarkMode, setThemeDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
