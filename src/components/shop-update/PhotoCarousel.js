import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class PhotoCarousel extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="box box-purple">
            <OwlCarousel className="owl-theme" loop margin={10}>
              <div class="item" style={{ margin: "10px" }}>
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
              <div class="item" style={{ margin: "10px" }}>
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
              <div class="item" style={{ margin: "10px" }}>
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
              <div class="item" style={{ margin: "10px" }}>
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
              <div class="item" style={{ margin: "10px" }}>
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
              <div class="item">
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
              <div class="item">
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="img-circle"
                  style={{ width: "100%" }}
                  alt="UserImage"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoCarousel;
