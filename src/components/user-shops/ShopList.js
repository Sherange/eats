import React, { Component } from "react";
import { FlatButton, RaisedButton } from "material-ui";
import { CUISINE, OPENING_HOURS } from "../../constant/constant";
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
      let imagePath = "/images/placeholder.jpg";

      if (shop.shop_photos[0] && shop.shop_photos[0].image_path) {
        imagePath = shop.shop_photos[0].image_path.substr(22);
      }

      let url = process.env.REACT_APP_IMAGE_PATH + imagePath;

      let selectedCuisine = CUISINE.find((item, index) => {
        return item.key === shop.cuisines_available;
      });

      let selectedOpeningHours = OPENING_HOURS.find((item, index) => {
        return item.key === shop.opening_hours;
      });

      return (
        <section key={index} className="content">
          <div className="container-fluid">
            <div className="boder-line" style={{ margin: "10px" }}>
              <div
                className="shop-list-col-1"
                onClick={() => this.handleUpdate(shop.id)}
              >
                <img src={url} className="shop-list-image" alt="userImage" />
              </div>
              <div className="shop-list-col-2">
                <div className="shop-list-description">
                  <p
                    className="card-title"
                    onClick={() => this.handleUpdate(shop.id)}
                  >
                    {shop.name}
                  </p>
                  {shop.description.length > 200 ? (
                    <p className="card-description">
                      {shop.description.substring(0, 200)}
                      <span className="read-more">....read more</span>
                    </p>
                  ) : (
                    <p>{shop.description}</p>
                  )}
                  <ul className="shop-list-features">
                    <li>
                      <i className="fa fa-coffee fa-2x" />
                      <span style={{ padding: "5px" }}>
                        Available Cusines - {selectedCuisine.value}
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-calendar-times-o fa-2x" />
                      <span style={{ padding: "5px" }}>
                        Opening Hours - {selectedOpeningHours.value}
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-star fa-2x" />
                      <span style={{ padding: "5px" }}>Rating - 4.5/5.0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shop-list-col-3">
                <div className="shop-list-buttons">
                  <FlatButton
                    label="Update"
                    onClick={() => this.handleUpdate(shop.id)}
                    primary={true}
                    labelStyle={{ textTransform: "none" }}
                    // backgroundColor={"#00a65a"}
                    style={{ margin: "5px" }}
                    icon={<i className="fa fa-file-text-o fa-2x" />}
                  />
                  <FlatButton
                    label="Delete"
                    primary={true}
                    labelStyle={{ textTransform: "none" }}
                    // backgroundColor={"#00a65a"}
                    style={{ margin: "5px" }}
                    icon={<i className="fa fa-trash-o fa-2x" />}
                  />
                  {/* <FlatButton
                    label="Status"
                    primary={true}
                    labelStyle={{ textTransform: "none" }}
                    // backgroundColor={"#F5F5F5"}
                    style={{ margin: "5px" }}
                    icon={<i className="fa fa-circle-thin fa-2x" />}
                  /> */}
                </div>
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
        {this.state.userShops && this.state.userShops.length > 0 ? (
          this.renderListItem(this.state.userShops)
        ) : (
          <div className="empty-list">
            <p className="profile-name">List your first shop now</p>
            <RaisedButton
              label="List My Shop"
              onClick={() => this.props.history.push("/add-shop")}
            />
          </div>
        )}
      </>
    );
  }
}

export default ShopList;
