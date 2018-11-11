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
          : "/images/placeholder.jpg";

      return (
        <section key={index} className="content">
          <div className="container-fluid">
            <div className="boder-line" style={{ margin: "10px" }}>
              <div className="shop-list-col-1">
                <img src={url} className="shop-list-image" alt="userImage" />
              </div>
              <div className="shop-list-col-2">
                <div className="shop-list-description">
                  <p className="card-title">{shop.name}</p>
                  <p className="card-description">{shop.description}</p>
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
                    <li>
                      <i className="fa fa-coffee" />
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
