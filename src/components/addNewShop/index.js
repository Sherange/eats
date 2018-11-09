import React, { Component } from "react";
import { connect } from "react-redux";
import AddShop from "./AddShop";

class AddNewShop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <AddShop
          dispatch={this.props.dispatch}
          user={this.props.user}
          shopRegistrationError={this.props.shopRegistrationError}
          shopRegistrationSuccess={this.props.shopRegistrationSuccess}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,
  shopRegistrationError: state.shop.shopRegistrationError,
  shopRegistrationSuccess: state.shop.shopRegistrationSuccess
});

export default connect(mapStateToProps)(AddNewShop);
