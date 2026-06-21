import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <h1>React Theme Switcher</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <div className="card">
        <h2>Current Theme: {theme}</h2>
        <p>
          This component changes style using React Context API.
        </p>
      </div>
    </div>
  );
}
export default App;