import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { uploadShopPhotos } from "../../actions/shopActions";

export default class PhotoDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      id: "",
      disabled: false
    };
    this.submit = this.submit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.selectedShop &&
      this.props.selectedShop.id &&
      this.state.id == ""
    ) {
      this.setState({ id: this.props.selectedShop.id });
    }
  }
  onDrop(files) {
    this.setState(
      {
        files
      },
      state => {
        this.submit();
      }
    );
  }

  submit() {
    if (this.state.id) {
      this.state.files.forEach(file => {
        var formData = new FormData();
        formData.append("image", file);
        formData.append("main_image", false);
        formData.append("shop_id", this.state.id);
        this.props.dispatch(uploadShopPhotos(formData));
      });
    }
  }

  render() {
    return (
      <div className="dropzone-wrapper">
        <Dropzone
          className="dropzone"
          onDrop={this.onDrop.bind(this)}
          disabled={this.state.disabled}
        >
          <img
            src="/images/upload.png"
            className="img-box"
            // style={{ width: "100%" }}
            alt="UserImage"
          />
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
        {this.state.disabled && (
          <p className="info">
            Please register your shop first to upload photos
          </p>
        )}
      </div>
    );
  }
}
