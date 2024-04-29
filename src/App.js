import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <p>hello!</p>
      <Dictionary />
      <footer>
        This project was coded with 🧡 by{" "}
        <a
          href="https://www.linkedin.com/in/nydiasubur/"
          target="_blank"
          rel="noopener noreferrer"
          autoFocus="on"
        >
          Nydia Subur
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/nydiasubur/dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://dictionary-ns8.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
