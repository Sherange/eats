import React, { Component } from "react";
import Header from "../header";
import SideBar from "../sidebar";
import MainFooter from "../footer";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

export default class Home extends Component {
  renderCard = () => {
    let rows = [];
    for (let index = 0; index < 64; index++) {
      rows.push(
        <div class="grid-item">
          <Card>
            {/* <CardTitle
              title="The Coffee Corner"
              subtitle="River Avenue, Aluthgama"
            /> */}
            <CardMedia
              overlay={
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
              }
            >
              <img
                src="https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2018/10/yimg_W6jPi8-640x427.jpg"
                alt=""
              />
            </CardMedia>

            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </CardText>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      );
    }
    return rows;
  };

  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header />
          <SideBar />
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
              <div className="grid-container">{this.renderCard()}</div>
            </div>
          </div>
          <MainFooter />
        </div>
      </div>
    );
  }
}
