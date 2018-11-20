import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class PhotoCarousel extends Component {
  renderItem() {
    return this.props.shopPhotos.map((item, index) => {
      return (
        <div className="item" key={index} style={{ margin: "10px" }}>
          <img
            src={item.image_path ? item.image_path : "/images/profile.png"}
            style={{ height: "180px" }}
            alt="UserImage"
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="box box-purple">
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {this.renderItem()}
        </OwlCarousel>
      </div>
    );
  }
}

export default PhotoCarousel;
