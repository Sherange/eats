import React, { Component } from "react";
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";
import MyShops from "../myshops"

class MyShopsPage extends Component {
  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header history={this.props.history} />
          <SideBar />
          <MyShops/>
          <MainFooter />
        </div>
      </div>
    );
  }
}

export default MyShopsPage;
