import React, { Component } from "react";

export default class MainFooter extends Component {
  render() {
    return (
      <footer className="main-footer">
        {/* <!-- To the right --> */}
        <div className="pull-right hidden-xs">Anything you want</div>
        {/* <!-- Default to the left --> */}
        <strong>
          Copyright &copy; 2016 <a href="/">Company</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}
