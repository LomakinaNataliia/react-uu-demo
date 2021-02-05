import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./LoginForm.js";
import RegisterForm from "./RegisterForm";

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Welcome to UU_demo page!</h1>

        <div>
          <Route exact path="/" component={LoginForm} />
          <Route path="/registerForm" component={RegisterForm} />
        </div>
        <p>
          Or <NavLink to="/registerForm">Click here to Sign-In</NavLink>
          <NavLink exact to="/">
            Click here to Log-In
          </NavLink>{" "}
        </p>

        <footer className="footer">
          {" "}
          This project is{" "}
          <a
            href="https://github.com/LomakinaNataliia/react-uu-demo"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </HashRouter>
  );
}
