import React, { Component } from "react";
import { connect } from "react-redux";
import ItemForm from "./ItemForm";
import { getSelectedShop } from "../../actions/shopActions";

class AddFoodItem extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    if (
      !this.props.selectedShop &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      this.props.dispatch(getSelectedShop({ id: this.props.match.params.id }));
    }
  }

  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <ItemForm
          user={this.props.user}
          selectedShop={this.props.selectedShop}
          addFoodItemsError={this.props.addFoodItemsError}
          addFoodItemsSuccess={this.props.addFoodItemsSuccess}
          dispatch={this.props.dispatch}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  selectedShop: state.shop.selectedShop,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.foodItem.isFetching,
  addFoodItemsError: state.foodItem.addFoodItemsError,
  addFoodItemsSuccess: state.foodItem.addFoodItemsSuccess
});

export default connect(mapStateToProps)(AddFoodItem);
