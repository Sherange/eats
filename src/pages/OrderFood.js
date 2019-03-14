import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import MainFooter from "../components/footer";
import Orders from "../components/orders";
import { getLoginUser } from "../actions/userActions";

class OrderFood extends Component {
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
          <div
            className="content-wrapper"
            style={{ minHeight: window.innerHeight }}
          >
            <section className="content">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <Orders
                    dispatch={this.props.dispatch}
                    history={this.props.history}
                  />
                </div>
              </div>
            </section>
          </div>

          <SideBar />
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

export default connect(mapStateToProps)(OrderFood);
