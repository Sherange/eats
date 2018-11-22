import React, { Component } from "react";
import { connect } from "react-redux";
import ItemForm from "./ItemForm";

class AddFoodItem extends Component {
  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <ItemForm
          user={this.props.user}
          selectedShop={this.props.selectedShop}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  selectedShop: state.shop.selectedShop,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.user.isFetching
});

export default connect(mapStateToProps)(AddFoodItem);
