import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "material-ui/Tabs";
import AddShop from "./AddShop";
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
    // console.log("selectedShop", this.props.selectedShop);
    // console.log("selectedShop", this.props.userShops);
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="container" style={{ width: "100%", padding: "10px" }}>
          <Tabs inkBarStyle={{ backgroundColor: "#00a65a" }}>
            <Tab
              label="My Shops"
              style={{ backgroundColor: "#ecf0f5", color: "black" }}
            >
              <ShopList
                dispatch={this.props.dispatch}
                user={this.props.user}
                userShops={this.props.userShops}
                selectedShop={this.props.selectedShop}
              />
            </Tab>
            <Tab
              label="Add New Shop"
              style={{ backgroundColor: "#ecf0f5", color: "black" }}
            >
              <AddShop
                dispatch={this.props.dispatch}
                user={this.props.user}
                shopRegistrationError={this.props.shopRegistrationError}
                shopRegistrationSuccess={this.props.shopRegistrationSuccess}
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
