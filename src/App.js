import React from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import AppBar from "@material-ui/core/AppBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/lgoin" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Register} />
      </div>
    </Router>
  );
}
const bottomLine = {
  background: "#2E3B55"
};

export default App;
