import React, { Component } from "react";
import { connect } from 'react-redux'
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";
import Home from "../home"

class HomePage extends Component {
  render() {
    console.log(this.props)
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header />
          <SideBar />
          <Home></Home>
          <MainFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  authenticated: state.user.authenticated,
  isFetching: state.user.isFetching


});

export default  connect(mapStateToProps) (HomePage)
