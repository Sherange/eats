import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

export default class PhotoDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      disabled: true
    };
    this.submit = this.submit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedShop && nextProps.selectedShop.id) {
      return { disabled: false };
    }else {
      return { disabled: true };
    }
    return null;
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
    this.state.files.forEach(file => {
      var formData = new FormData();
      formData.append("image", file);
      formData.append("main_image", false);
      formData.append("shop_id", 1);
      axios
        .post(process.env.REACT_APP_API_URL + "shop-photos", formData, {
          headers: {
            Authorization: localStorage.access_token,
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log("response", response);
        });
    });
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
            alt="User Image"
          />
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
        {this.state.disabled && (
          <p className="info">Please register your shop to upload photos</p>
        )}
      </div>
    );
  }
}
