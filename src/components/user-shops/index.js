import React, { Component } from "react";
import { connect } from "react-redux";
import ShopList from "./ShopList";
import { getUserShops, deleteShop } from "../../actions/shopActions";
class MyShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userShops: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(getUserShops());
  }

  shopDelete(id) {
    this.props.dispatch(deleteShop(id));
  }

  componentDidUpdate(prevProps) {
    if (this.props.userShops !== this.state.userShops) {
      this.setState({ userShops: this.props.userShops });
    }
  }

  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <ShopList
          dispatch={this.props.dispatch}
          user={this.props.user}
          userShops={this.state.userShops}
          shopDelete={this.shopDelete.bind(this)}
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
