import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Login extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: "",
      password: "",
      st: false
    };
  }
  validateForm() {
    return this.state.email.Length > 0 && this.state.password.Length > 0;
  }

  handlelogin() {
    console.log(this.context);
    console.log(this.state.username);
    console.log(this.state.password);
  }
  handleregister() {
    this.props.history.push("/register");
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
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
      </div>
    );
  }
}
const style = {
  margin: 15
};
const appbar = {
  background: "#2E3B55",
  padding: "10px",
  textAlign: "right"
};
export default Login;
