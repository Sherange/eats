import React, { Component } from "react";
import { connect } from "react-redux";

class Orders extends Component {
  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        Here
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching
});

export default connect(mapStateToProps)(Orders);
