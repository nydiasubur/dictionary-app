import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="App container p-5 mt-5 col-sm-10">
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
      <div className="col-sm-1"></div>
    </div>
  );
}

export default App;
