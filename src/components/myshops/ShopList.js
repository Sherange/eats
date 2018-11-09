import React, { Component } from "react";
import { getSelectedShop, getUserShops } from "../../actions/shopActions";
import FlatButton from "material-ui/FlatButton";
class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userShops: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userShops.length > 0) {
      return { userShops: nextProps.userShops };
    }
    return null;
  }

  componentDidMount() {
    this.props.dispatch(getSelectedShop({ id: 1 }));
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
            <div className="col-xs-8 col-sm-8 col-md-6">
              <div className="shop-list-description">
                <p>{shop.name}</p>
                <p className="hidden-xs">{shop.description}</p>
                <ul className="shop-list-features">
                  <li>
                    <i className="fa fa-link" />
                    <span style={{ padding: "5px" }}>
                      Available Cusines - {shop.cuisines_available}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-link" />
                    <span style={{ padding: "5px" }}>
                      Opening Hours - {shop.opening_hours}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <div className="shop-list-buttons">
                <FlatButton
                  label="Update"
                  backgroundColor={"#42A5F5"}
                  style={{ margin: "5px" }}
                />
                <FlatButton
                  label="Delete"
                  backgroundColor={"#EC407A"}
                  style={{ margin: "5px" }}
                />
                <FlatButton
                  label="Status"
                  backgroundColor={"#69F0AE"}
                  style={{ margin: "5px" }}
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
