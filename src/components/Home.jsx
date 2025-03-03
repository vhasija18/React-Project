import React, { Component } from "react";
import "./home.css";
import "./homeAppBar.jsx";
import App from "./test_homeAppbar.jsx";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import dp from "./download.jpg";

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];
function createData(name, calories, fat, carbs, protiens) {
  return { name, calories, fat, carbs, protiens };
}
var Name = "Vishwas";

class Home extends Component {
  constructor(props) {
    super(props);
    this.Namme = "helllooos";
    this.state = {
      Name: "Vishwas"
    };
  }
  post = () => {
    console.log("eeee");
    this.props.history.push({ pathname: "/profile", data: this.state.Name });
  };
  render() {
    const { data } = this.props.location;
    this.state.Name = data;
    console.log(this.state.Name);
    return (
      <div>
        <App Onprofile={this.post} />
        <div className="left">
          <div>
            <img alt="DP" src={dp} className="big_avatar"></img>
          </div>
          <a className="Name_style">{this.state.Name}</a>
        </div>
        <div className="center">
          <div>
            <TextField
              placeholder="What on your mind?"
              variant="outlined"
              className="status_box"
            ></TextField>
          </div>
          <Button variant="contained" style={button} onClick={this.post}>
            <a style={text_color}>Post</a>
          </Button>
          <Table>
            <TableBody>
              {rows.map(row => (
                <Paper className="row_layout">
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" key={row.name}>
                      <a>{row.name}</a>
                    </TableCell>
                  </TableRow>
                </Paper>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default Home;

const button = {
  marginLeft: "500px",
  backgroundColor: "#00BCD4"
};

const text_color = {
  color: "#FFFFFF"
};
