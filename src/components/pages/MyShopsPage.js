import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";
import MyShops from "../myshops";
import { getLoginUser } from "../../actions/userActions";

class MyShopsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.dispatch(getLoginUser(this.props.history));
    }
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
