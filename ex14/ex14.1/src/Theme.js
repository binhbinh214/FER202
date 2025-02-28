import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}
    >
      <h2>Current Theme: {theme === theme.light ? "Light" : "Dark"}</h2>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.foreground,
          color: theme.background,
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
