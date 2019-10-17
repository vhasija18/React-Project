import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "@material-ui/core/TextField";
import Notify, { AlertTypes } from "../services/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  state = {
    user_id: "",
    password: "",
    st: false
  };

  validateForm() {
    //var reg = /^([\w]+)@([\w]+\.)+([\w]+)$/i;
    var reg = /^[\w]+\@([\w]+\.)+[\w]+$/i;
    var message = "";
    var flag = 0;
    if (!reg.test(this.state.user_id)) {
      flag = 1;
      message = "Check your ID";
    }
    if (this.state.user_id.length < 8) {
      if (flag == 1) {
        message = message + " and Check your passowrd";
      } else {
        flag = 1;
        message = "Check your Passowrd";
      }
    }
    if (flag == 1) {
      Notify.sendNotification(message, AlertTypes.error);
    } else {
      Notify.sendNotification("Login Succesfull", AlertTypes.success);
    }
  }

  handleChange_name = event => {
    const user_id = event.target.value;
    this.setState({ user_id });
  };
  handleChange_password = event => {
    const password = event.target.value;
    this.setState({ password });
  };
  handlelogin = () => {
    this.validateForm();
    console.log(this.state.user_id);
    console.log(this.state.password);
    //this.props.history.push("/home");
  };
  handleregister() {
    this.props.history.push("/register");
  }
  render() {
    const { user_id, password } = this.state;
    Notify.notifications.subscribe(
      alert => alert instanceof Function && alert()
    );
    return (
      <div>
        <MuiThemeProvider>
          <AppBar position="static" style={appbar}></AppBar>
          <div style={top_margin}>
            <TextField
              placeholder="Email Id"
              margin="normal"
              variant="outlined"
              value={user_id}
              onChange={this.handleChange_name}
              type="email"
            />
            <br />
            <TextField
              type="password"
              placeholder="Password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={this.handleChange_password}
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={() => {
                this.handlelogin();
              }}
            />
            <br />
            <a>Not a member? Register!</a>
            <br />
            <RaisedButton
              label="Register"
              primary={true}
              style={style}
              onClick={() => {
                this.handleregister();
              }}
            />
          </div>
        </MuiThemeProvider>
        <ToastContainer autoClose={3500} />
      </div>
    );
  }
}
const style = {
  margin: 15
};
const appbar = {
  background: "#00BCD4",
  padding: "10px",
  textAlign: "right",
  height: "50px"
};
export default Login;
const top_margin = {
  margin: 60
};
