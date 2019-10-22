import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./test_home.css";

class Hook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grow">
        <AppBar position="static">
          <Toolbar>
            <div className="grow" />
            <div className="sectionDesktop">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={this.menuId}
                aria-haspopup="true"
                onClick={this.props.Onprofile}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <Button color="inherit" style={{ marginLeft: "10px" }}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Hook;
