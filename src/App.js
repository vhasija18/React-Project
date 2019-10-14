import React from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}
const bottomLine = {
  background: "#2E3B55"
};

export default App;
