import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";
import Home from "../home";

class HomePage extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header />
          <SideBar />
          <Home />
          <MainFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.user.isFetching
});

export default connect(mapStateToProps)(HomePage);
