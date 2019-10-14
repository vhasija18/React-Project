import React, { Component } from "react";
import "./home.css";
import "./homeAppBar.jsx";
import App from "./homeAppBar.jsx";
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
const Name = "Vishwas";

class Home extends Component {
  render() {
    return (
      <div>
        <App />
        <div className="left">
          <div>
            <img alt="DP" src={dp} className="big_avatar"></img>
          </div>
          <a className="Name_style">{Name}</a>
        </div>
        <div className="center">
          <div>
            <TextField
              placeholder="What on your mind?"
              variant="outlined"
              className="status_box"
            ></TextField>
            <Button variant="contained" color="primary" style={button}>
              Post
            </Button>
          </div>
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
        <div className="right">sdad</div>
      </div>
    );
  }
}

export default Home;

const button = {
  marginLeft: "700px"
};
