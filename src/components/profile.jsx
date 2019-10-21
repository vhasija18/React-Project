import React, { Component } from "react";
import App from "./test_homeAppbar.jsx";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <App />
        <div className="left">
          <div></div>
          <a className="Name_style"></a>
        </div>
        <div className="center" />
        <div className="right" />
      </div>
    );
  }
}

export default Profile;
