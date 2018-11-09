import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "material-ui/Tabs";
import AddShop from "./AddShop";
import ShopList from "./ShopList";
import { getUserShops } from "../../actions/shopActions";
import { SELECTED_SHOP } from "../../actions/types";
class MyShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabId: 1
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getUserShops());
  }

  handleTabChange(value) {
    if (value === 1) {
      this.props.dispatch({ type: SELECTED_SHOP, payload: null });
    }
    this.setState({ tabId: value });
  }

  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="container" style={{ width: "100%", padding: "10px" }}>
          <Tabs
            inkBarStyle={{ backgroundColor: "#00a65a" }}
            initialSelectedIndex={this.state.tabId}
            onChange={this.handleTabChange}
            value={this.state.tabId}
          >
            <Tab
              label="My Shops"
              style={{ backgroundColor: "#ecf0f5", color: "black" }}
              value={1}
            >
              <ShopList
                dispatch={this.props.dispatch}
                user={this.props.user}
                userShops={this.props.userShops}
                handleTabChange={this.handleTabChange.bind(this)}
              />
            </Tab>
            <Tab
              label="Add / Update Shop"
              style={{ backgroundColor: "#ecf0f5", color: "black" }}
              value={2}
            >
              <AddShop
                dispatch={this.props.dispatch}
                user={this.props.user}
                shopRegistrationError={this.props.shopRegistrationError}
                shopRegistrationSuccess={this.props.shopRegistrationSuccess}
                selectedShop={this.props.selectedShop}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  shops: state.shop.shops,
  userShops: state.shop.userShops,
  selectedShop: state.shop.selectedShop,

  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,

  shopRegistrationError: state.shop.shopRegistrationError,
  shopRegistrationSuccess: state.shop.shopRegistrationSuccess
});

export default connect(mapStateToProps)(MyShops);
