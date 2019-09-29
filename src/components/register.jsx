import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputBase from "@material-ui/core/InputBase";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core/styles";

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
  //const [value, setValue] = React.useState("None");
  constructor(props) {
    super(props);
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
    console.log(event.target.value);
  };
  handleYear = event => {
    this.state.year = event.target.value;
    console.log(event.target.value);
  };
  handleDate = event => {
    this.state.date = event.target.value;
    console.log(event.target.value);
  };
  handleSubmit() {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.gender);
    this.state.dob =
      this.state.month + " " + this.state.date + " " + this.state.year;
    console.log(this.state.dob);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="login" />
            <TextField
              hintText="Enter your First Name"
              onChange={(event, newValue) =>
                this.setState({ firstName: newValue })
              }
            />
            <TextField
              hintText="Enter your Last Name"
              onChange={(event, newValue) =>
                this.setState({ lastName: newValue })
              }
            />
            <br />
            <TextField
              type="email"
              hintText="Enter your email address"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br></br>
            <TextField
              type="password"
              hintText="Enter your Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RadioGroup
              aria-label="gender"
              name="gender1"
              onChange={this.handleGender}
              row
            >
              <div style={radiogroup}>
                <a>Gender: </a>
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
            <br />
            Date of Birth:
            <NativeSelect
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
            <NativeSelect onChange={this.handleYear} input={<BootstrapInput />}>
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

const radiogroup = {
  marginLeft: "auto",
  marginRight: "auto"
};
const radioitem = {
  marginleft: "auto"
};
export default Regiter;
