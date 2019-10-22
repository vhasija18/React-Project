import React, { Component } from "react";
import App from "./test_homeAppbar.jsx";
import "./home.css";
import dp from "./download.jpg";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Vishwas",
      openDialogbox: false,
      succes_msg: true
    };
  }
  handlePost() {
    this.setState({ openDialogbox: true });
  }
  handleClose() {
    this.setState({ openDialogbox: false });
  }

  handleUpload() {
    this.setState({ succes_msg: false });
  }
  render() {
    //const { data } = this.props.location;
    //this.state.username = data;
    return (
      <div className="main">
        <App className="ap_style" />
        <div className="left">
          <div>
            <img alt="DP" src={dp} className="big_avatar"></img>
          </div>
          <a className="Name_style">{this.state.username}</a>
        </div>
        <div className="center">
          <div className="box">
            <div className="edit_button">
              <Button
                color="primary"
                onClick={() => {
                  this.handlePost();
                }}
              >
                Add photos
              </Button>
              <Dialog
                open={this.state.openDialogbox}
                keepMounted
                onClose={() => {
                  this.handleClose();
                }}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Upload your photo"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <input type="file"></input>
                    <a hidden={this.state.succes_msg} style={txt_color}>
                      Image Uploaded!
                    </a>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      this.handleUpload();
                    }}
                    color="primary"
                  >
                    Upload
                  </Button>
                  <Button
                    onClick={() => {
                      this.handleClose();
                    }}
                    color="primary"
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div>
              <Grid container justify="center" spacing={5}>
                {[0, 1, 2, 3].map(value => (
                  <Grid key={value} item>
                    <Paper className="paper_size">
                      <img></img>
                      {value}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="box">
            <div className="edit_button">
              <IconButton>
                <Edit />
              </IconButton>
            </div>
            <a className="heading_1">{"Basic Details"}</a>
            <hr />
            <div className="horizontal_layout">
              <a className="heading_1">Name:</a>
              <a className="user_field">{this.state.username}</a>
            </div>
            <hr />
            <div className="horizontal_gray">
              <a className="heading_1">Date of Birth:</a>
              <a className="user_field">{this.state.username}</a>
            </div>
          </div>
        </div>
        <div className="right" />
      </div>
    );
  }
}

export default Profile;

const txt_color = {
  color: "#52F015"
};
