import React, { Component } from "react";
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";

export default class Home extends Component {
  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header />
          <SideBar />
          <MainFooter />
        </div>
      </div>
    );
  }
}
