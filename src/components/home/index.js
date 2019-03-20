import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "./Cards";

class Home extends Component {
  render() {
    const { user } = this.props;
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <section className="content">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-line-chart" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Shops</span>
                  <span className="info-box-number">
                    {user && user.meta ? user.meta.shop_count : 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red">
                  <i className="fa fa-google-plus" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Food Items</span>
                  <span className="info-box-number">
                    {user && user.meta ? user.meta.food_count : 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block" />

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-teal">
                  <i className="fa fa-shopping-cart" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Orders</span>
                  <span className="info-box-number">
                    {user && user.meta ? user.meta.order_count : 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow">
                  <i className="fa fa-users" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Members</span>
                  <span className="info-box-number">
                    {user && user.meta ? user.meta.user_count : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="grid-container">
            <Cards foods={this.props.foods} dispatch={this.props.dispatch} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,
  foods: state.foodItem.foods
});
export default connect(mapStateToProps)(Home);
