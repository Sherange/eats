import React, { Component } from "react";
import { connect } from "react-redux";
import UpdateShop from "./UpdateShop";
import { getSelectedShop, getSelectedShopFoods } from "../../actions/shopActions";

class UpdateShops extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

    window.scrollTo(0, 0);

    if (this.props.match.params && this.props.match.params.id) {
      this.props.dispatch(getSelectedShop({ id: this.props.match.params.id }));
      this.props.dispatch(getSelectedShopFoods({ id: this.props.match.params.id }));
    }
  }
  render() {
    console.log('this.props',this.props);
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <UpdateShop
          dispatch={this.props.dispatch}
          history={this.props.history}
          user={this.props.user}
          shopRegistrationError={this.props.shopRegistrationError}
          shopRegistrationSuccess={this.props.shopRegistrationSuccess}
          selectedShop={this.props.selectedShop}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,
  selectedShop: state.shop.selectedShop,
  shopFoods: state.shop.shopFoods,
  shopRegistrationError: state.shop.shopRegistrationError,
  shopRegistrationSuccess: state.shop.shopRegistrationSuccess
});

export default connect(mapStateToProps)(UpdateShops);
