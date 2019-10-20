import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Notify from "./services/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  componentDidMount() {
    Notify.notifications.subscribe(
      alert => alert instanceof Function && alert()
    );
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <ToastContainer autoClose={3500} />
        </div>
      </Router>
    );
  }
}

export default App;
