import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "@material-ui/core/AppBar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputBase from "@material-ui/core/InputBase";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Notify, { AlertTypes } from "../services/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const years = [
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2205"
];
const Dates = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31"
];

class Regiter extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      dob: "",
      gender: "",
      month: "",
      year: "",
      date: ""
    };
  }

  handleMonth = event => {
    this.state.month = event.target.value;
    console.log(event.target.value);
  };
  handleGender = event => {
    this.state.gender = event.target.value;
    console.log(this.state.gender);
  };
  handleYear = event => {
    this.state.year = event.target.value;
    console.log(event.target.value);
  };
  handleDate = event => {
    this.state.date = event.target.value;
    console.log(event.target.value);
  };
  handleEmail = event => {
    const email = event.target.value;
    this.setState({ email });
  };
  handleFirstName = event => {
    const firstName = event.target.value;
    this.setState({ firstName });
  };
  handleLastName = event => {
    const lastName = event.target.value;
    this.setState({ lastName });
  };
  handlePassowrd = event => {
    const password = event.target.value;
    this.setState({ password });
  };
  handleSubmit() {
    this.validate();
  }
  validate() {
    var flag = 0;
    var message = "";
    var reg = /^[\w]+\@([\w]+\.)+[\w]+$/i;
    var reg_password = /^(?=.*[\w])(?=.*[#$^+=!*()@%&]).{8,10}$/;
    if (this.state.firstName.length == 0) {
      flag = 1;
      message = "Enter your first Name";
    }
    if (this.state.lastName.length == 0) {
      if (flag == 1) {
        message = message + " and Enter your Last Name";
      } else {
        flag = 1;
        message = "Enter your last Name";
      }
    }
    if (this.state.email.length == 0) {
      if (flag == 1) {
        message = message + "and Enter your email";
      } else {
        flag = 1;
        message = "Enter your email";
      }
    }
    if (this.state.password.length == 0) {
      if (flag == 1) {
        message = message + "and Enter your password";
      } else {
        flag = 1;
        message = "Enter your password";
      }
    }
    if (!reg.test(this.state.email)) {
      flag = -1;
      Notify.sendNotification("Invalid Email Id", AlertTypes.error);
    }
    if (!reg_password.test(this.state.password)) {
      flag = -1;
      Notify.sendNotification("Invalid Passowrd", AlertTypes.error);
    }
    if (flag == 1) {
      Notify.sendNotification(message, AlertTypes.error);
    }
    if (flag != 1 || flag != -1) {
      Notify.sendNotification("Registered! Go to Login", AlertTypes.success);
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.password);
      console.log(this.state.gender);
      this.state.dob =
        this.state.month + " " + this.state.date + " " + this.state.year;
      console.log(this.state.dob);
      this.setState({ firstName: "", lastName: "", email: "", password: "" });
    }
  }

  render() {
    const { firstName, lastName, email, passowrd, value } = this.state;
    return (
      <div>
        <MuiThemeProvider>
          <AppBar position="static" style={appbar}>
            <Button href="/" style={appbutton} color="inherit">
              Login
            </Button>
          </AppBar>
          <div style={top_margin}>
            <TextField
              placeholder="First Name"
              variant="outlined"
              value={firstName}
              onChange={this.handleFirstName}
            />
            <TextField
              placeholder="Last Name"
              variant="outlined"
              style={datemargin}
              marginLeft="auto"
              value={lastName}
              onChange={this.handleLastName}
            />
            <br />
            <TextField
              type="email"
              placeholder="Email address"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={this.handleEmail}
            />
            <br></br>
            <TextField
              type="password"
              placeholder="Password"
              margin="normal"
              variant="outlined"
              value={passowrd}
              onChange={this.handlePassowrd}
            />
            <br />
            <RadioGroup
              aria-label="gender"
              name="gender1"
              onChange={this.handleGender}
            >
              <div style={radiogroup}>
                <a style={gender_heading}>Gender: </a>
                <br></br>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  style={radioitem}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </div>
            </RadioGroup>
            <a style={dob_heading}>Date of Birth:</a>
            <br></br>
            <NativeSelect
              style={monthmargin}
              onChange={this.handleMonth}
              input={<BootstrapInput />}
            >
              {months.map(month => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </NativeSelect>
            <NativeSelect onChange={this.handleDate} input={<BootstrapInput />}>
              {Dates.map(Date => (
                <option key={Date} value={Date}>
                  {Date}
                </option>
              ))}
            </NativeSelect>
            <NativeSelect
              style={datemargin}
              onChange={this.handleYear}
              input={<BootstrapInput />}
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </NativeSelect>
            <br />
            <br />
            <RaisedButton
              label="Register"
              primary={true}
              onClick={() => {
                this.handleSubmit();
              }}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const appbar = {
  background: "#00BCD4",
  padding: "10px",
  textAlign: "right",
  height: "50px"
};
const appbutton = {
  width: "50px",
  marginLeft: "1150px"
};
const radiogroup = {
  marginLeft: "auto",
  marginRight: "auto"
};
const radioitem = {
  marginleft: "auto"
};
const top_margin = {
  margin: 60
};
const dob_heading = {
  marginLeft: "-210px",
  color: "#808080"
};
const gender_heading = {
  marginLeft: "-250px",
  color: "#808080"
};
const monthmargin = {
  marginLeft: "-40px",
  marginRight: "15px"
};
const datemargin = {
  marginLeft: "15px"
};
export default Regiter;
