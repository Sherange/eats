import React, { Component } from "react";
import { connect } from "react-redux";
import ShopList from "./ShopList";
import { getUserShops } from "../../actions/shopActions";
class MyShops extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getUserShops());
  }

  render() {
    return (
      <div className="content-wrapper">
        <ShopList
          dispatch={this.props.dispatch}
          user={this.props.user}
          userShops={this.props.userShops}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userShops: state.shop.userShops,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching
});

export default connect(mapStateToProps)(MyShops);
