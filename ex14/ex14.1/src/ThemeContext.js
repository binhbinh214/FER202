import React, { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    bodyBackground: "#ffffff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb",
    bodyBackground: "#333333",
  },
};

// Tạo Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  React.useEffect(() => {
    document.body.style.backgroundColor = theme.bodyBackground;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
