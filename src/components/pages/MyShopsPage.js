import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";
import MyShops from "../myshops";
import { getLoginUser } from "../../actions/userActions";
import { fetchShops } from "../../actions/shopActions";

class MyShopsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.dispatch(getLoginUser());
    }
    this.props.dispatch(fetchShops());
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user && nextProps.user.id === undefined) {
      nextProps.history.push("/login");
    }
    return null;
  }

  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header history={this.props.history} />
          <SideBar />
          <MyShops dispatch={this.props.dispatch} />
          <MainFooter />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,
  shops: state.shop.shops
});

export default connect(mapStateToProps)(MyShopsPage);
