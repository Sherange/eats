import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopPhotos: []
    };
  }

  componentDidMount() {
    if (this.props.shopPhotos) {
      this.setState({ shopPhotos: this.props.shopPhotos });
    }
  }

  componentDidUpdate() {
    if (this.state.shopPhotos !== this.props.shopPhotos) {
      this.setState({ shopPhotos: this.props.shopPhotos });
    }
  }

  renderItem() {
    return this.state.shopPhotos.map((item, index) => {
      let imagePath = "/images/profile.png";
      if (item.image_path) {
        imagePath =
          process.env.REACT_APP_IMAGE_PATH + item.image_path.substr(22);
      }
      return (
        <div className="item" key={index} style={{ margin: "10px" }}>
          <img src={imagePath} style={{ height: "180px" }} alt="UserImage" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="box box-purple">
        <OwlCarousel
          className="owl-theme"
          loop={false}
          margin={10}
          nav={false}
          autoplay={true}
        >
          {this.state.shopPhotos && this.renderItem()}
        </OwlCarousel>
      </div>
    );
  }
}

export default PhotoCarousel;
