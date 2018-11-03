import React, { Component } from "react";
import Cards from "./Cards";

class Home extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-line-chart" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Shops</span>
                  <span className="info-box-number">560</span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red">
                  <i className="fa fa-google-plus" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
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
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">760</span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow">
                  <i className="fa fa-users" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="grid-container">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
