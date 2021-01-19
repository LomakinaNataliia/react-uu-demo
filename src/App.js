import React from "react";
import "./App.css";
import LoginForm from "./LoginForm.js";

export default function App() {
  return (
    <div className="App">
      <h1>UU_demo page</h1>
      <LoginForm />
      <footer>
        {" "}
        This project is{" "}
        <a
          href="https://github.com/LomakinaNataliia/react-uu-demo"
          target="_blank"
        >
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}
