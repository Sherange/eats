import React, { Component } from "react";
import { connect } from "react-redux";
import ItemForm from './ItemForm'

class AddFoodItem extends Component {
  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <ItemForm></ItemForm>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.user.isFetching
});

export default connect(mapStateToProps)(AddFoodItem);
