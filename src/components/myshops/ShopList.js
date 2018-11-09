import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userShops: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userShops.length > 0) {
      return { userShops: nextProps.userShops };
    }
    return null;
  }

  handleUpdate(id) {
    this.props.history.push("/update-shop/" + id);
  }

  renderListItem = shops => {
    return shops.map((shop, index) => {
      let url =
        shop.shop_photos[0] && shop.shop_photos[0].image_path
          ? shop.shop_photos[0].image_path
          : "/images/placeholder.png";

      return (
        <section key={index} className="content-shop-list">
          <div className="row boder-line">
            <div
              className="hidden-xs hidden-sm col-md-2"
              style={{ padding: "0px" }}
            >
              <img src={url} className="shop-list-image" />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8">
              <div className="shop-list-description">
                <p>
                  <strong> {shop.name} </strong>
                </p>
                <p className="hidden-xs">{shop.description}</p>
                <ul className="shop-list-features">
                  <li>
                    <i className="fa fa-coffee" />
                    <span style={{ padding: "5px" }}>
                      Available Cusines - {shop.cuisines_available}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-calendar-times-o" />
                    <span style={{ padding: "5px" }}>
                      Opening Hours - {shop.opening_hours}
                    </span>
                  </li>
                </ul>

                <ul className="shop-list-features">
                  <li>
                    <i className="fa fa-coffee" />
                    <span style={{ padding: "5px" }}>
                      Available Cusines - {shop.cuisines_available}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-calendar-times-o" />
                    <span style={{ padding: "5px" }}>
                      Opening Hours - {shop.opening_hours}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-2">
              <div className="shop-list-buttons">
                <FlatButton
                  label="Update"
                  onClick={() => this.handleUpdate(shop.id)}
                  primary={true}
                  labelStyle={{ textTransform: "none" }}
                  // backgroundColor={"#00a65a"}
                  style={{ margin: "5px" }}
                  icon={<i className="fa fa-file-text-o" />}
                />
                <FlatButton
                  label="Delete"
                  primary={true}
                  labelStyle={{ textTransform: "none" }}
                  // backgroundColor={"#00a65a"}
                  style={{ margin: "5px" }}
                  icon={<i className="fa fa-bitbucket" />}
                />
                <FlatButton
                  label="Status"
                  primary={true}
                  labelStyle={{ textTransform: "none" }}
                  // backgroundColor={"#F5F5F5"}
                  style={{ margin: "5px" }}
                  icon={<i className="fa fa-circle-thin" />}
                />
              </div>
            </div>
          </div>
        </section>
      );
    });
  };

  render() {
    return (
      <>
        <section className="content-header">
          <h1>
            My Food Courts
            <small>Preview</small>
          </h1>
        </section>
        {this.state.userShops &&
          this.state.userShops.length > 0 &&
          this.renderListItem(this.state.userShops)}
      </>
    );
  }
}

export default ShopList;
