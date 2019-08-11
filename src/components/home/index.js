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
        {user && user.user_type === "admin" && (
          <section className="content">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon">
                    <img src="/images/shop.png" />
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Shops</span>
                    <span className="info-box-number">
                      {user && user.meta ? user.meta.shop_count : 0}
                    </span>

                    <a
                      href={
                        process.env.REACT_APP_API_URL + "reports/shop-report"
                      }
                      target="_blank"
                    >
                      {" "}
                      Shop Report
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon">
                    <img src="/images/food_items.png" />
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Food Items</span>
                    <span className="info-box-number">
                      {user && user.meta ? user.meta.food_count : 0}
                    </span>

                    <a
                      href={
                        process.env.REACT_APP_API_URL + "reports/food-report"
                      }
                      target="_blank"
                    >
                      Food Report
                    </a>
                  </div>
                </div>
              </div>

              <div className="clearfix visible-sm-block" />

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon">
                    <img src="/images/orders.png" />
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Orders</span>
                    <span className="info-box-number">
                      {user && user.meta ? user.meta.order_count : 0}
                    </span>
                    <a
                      href={
                        process.env.REACT_APP_API_URL + "reports/order-report"
                      }
                      target="_blank"
                    >
                      Order Report
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="info-box">
                  <span className="info-box-icon">
                    <img src="/images/members.png" />
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Members</span>
                    <span className="info-box-number">
                      {user && user.meta ? user.meta.user_count : 0}
                    </span>
                    <a
                      href={
                        process.env.REACT_APP_API_URL + "reports/user-report"
                      }
                      target="_blank"
                    >
                      User Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="container-fluid">
          <div className="grid-container">
            <Cards foods={this.props.foods} userType={user.user_type} dispatch={this.props.dispatch} />
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
