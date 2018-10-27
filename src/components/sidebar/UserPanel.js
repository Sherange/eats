import React, { Component } from "react";

export default class UserPannel extends Component {
  render() {
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img
            src="/images/profile.png"
            className="img-circle"
            alt="User Image"
          />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          {/* <!-- Status --> */}
          <a href="#">
            <i className="fa fa-circle text-success" /> Online
          </a>
        </div>
      </div>
    );
  }
}
