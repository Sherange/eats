import React, { Component } from "react";
import {
  TextField,
  RaisedButton,
  SelectField,
  MenuItem
} from "material-ui";
import { updateShop } from "../../actions/shopActions";
import {
  SHOP_REGISTRATION_ERROR,
  SHOP_REGISTRATION_SUCCESS
} from "../../actions/types";
import PhotoDrop from "./PhotoDrop";
import moment from "moment";
import PhotoCarousel from "./PhotoCarousel";
import { CUISINE, OPENING_HOURS } from "../../constant/constant";

class UpdateShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      cuisinesAvailable: "",
      cuisinesAvailableIndex: "",
      openingHours: "",
      openingHoursIndex: "",
      phoneNumber: "",
      description: "",
      address: "",
      streetOne: "",
      streetTwo: "",
      city: "",
      country: "",
      status: "",
      shopPhotos: [],

      error: false,
      errorMessage: "",

      success: false,
      successMessage: "",

      errorName: "",
      errorCuisines: "",
      errorOpeningHours: "",
      errorAddress: "",
      errorPhoneNumber: "",
      errorDescription: ""
    };
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.error === true) {
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" }, state => {
          this.props.dispatch({ type: SHOP_REGISTRATION_ERROR, payload: "" });
        });
      }, 2000);
    }

    if (this.state.success === true) {
      setTimeout(() => {
        this.setState({ success: false, successMessage: "" }, state => {
          this.props.dispatch({ type: SHOP_REGISTRATION_SUCCESS, payload: "" });
          this.props.history.push("/user-shops");
        });
      }, 2000);
    }

    if (this.props.shopRegistrationError && this.state.error === false) {
      this.setState({
        error: true,
        errorMessage: this.props.shopRegistrationError
      });
    }

    if (this.props.shopRegistrationSuccess && this.state.success === false) {
      this.setState({
        success: true,
        successMessage: this.props.shopRegistrationSuccess
      });
    }

    if (prevProps.selectedShop !== this.props.selectedShop) {
      const selectedCusine = CUISINE.find((item, key) => {
        return item.key === this.props.selectedShop.cuisines_available;
      });

      const selectedOpeningHours = OPENING_HOURS.find((item, key) => {
        return item.key === this.props.selectedShop.opening_hours;
      });

      this.setState({
        id: this.props.selectedShop.id,
        name: this.props.selectedShop.name,
        cuisinesAvailable: selectedCusine.value,
        cuisinesAvailableIndex: selectedCusine.key,
        openingHours: selectedOpeningHours.value,
        openingHoursIndex: selectedOpeningHours.key,
        phoneNumber: this.props.selectedShop.phone_number,
        description: this.props.selectedShop.description,
        address: this.props.selectedShop.shop_address
          ? this.props.selectedShop.shop_address.address
          : "",
        streetOne: this.props.selectedShop.shop_address
          ? this.props.selectedShop.shop_address.street_one
          : "",
        streetTwo: this.props.selectedShop.shop_address
          ? this.props.selectedShop.shop_address.street_two
          : "",
        city: this.props.selectedShop.shop_address
          ? this.props.selectedShop.shop_address.city
          : "",
        country: this.props.selectedShop.shop_address
          ? this.props.selectedShop.shop_address.country
          : "",
        status: this.props.selectedShop.status,
        shopPhotos: this.props.selectedShop.shop_photos
      });
    }
  }

  handleChangeCuisinesAvailable = (event, index, value) => {
    this.setState({
      cuisinesAvailable: value,
      cuisinesAvailableIndex: index,
      errorCuisines: ""
    });
  };

  handleChangeOpeningHours = (event, index, value) => {
    this.setState({
      openingHours: value,
      openingHoursIndex: index,
      errorOpeningHours: ""
    });
  };

  validate() {
    if (this.state.name === "") {
      this.setState({ errorName: "Shop name required" });
      return false;
    } else if (this.state.cuisinesAvailable === "") {
      this.setState({ errorCuisines: "Cuisines required" });
      return false;
    } else if (this.state.openingHours === "") {
      this.setState({
        errorOpeningHours: "Opening Hours required"
      });
      return false;
    } else if (this.state.phoneNumber === "") {
      this.setState({ errorPhoneNumber: "Phone number required" });
      return false;
    } else if (this.state.address === "") {
      this.setState({ errorAddress: "Address required" });
      return false;
    } else if (this.state.description === "") {
      this.setState({ errorDescription: "Description required" });
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.validate() === true) {
      const data = {
        id: this.state.id,
        name: this.state.name,
        cuisines_available: this.state.cuisinesAvailableIndex,
        opening_hours: this.state.openingHoursIndex,
        phone_number: this.state.phoneNumber,
        description: this.state.description,
        user_id: this.props.user.id,
        status: this.state.status,
        address: this.state.address,
        street_one: this.state.streetOne,
        street_two: this.state.streetTwo,
        city: this.state.city,
        country: this.state.country
      };
      this.props.dispatch(updateShop(data));
    }
  }

  _renderFormBox() {
    const cuisineItem = CUISINE.map(item => {
      return (
        <MenuItem key={item.key} value={item.value} primaryText={item.value} />
      );
    });

    const openingHoursItem = OPENING_HOURS.map(item => {
      return (
        <MenuItem key={item.key} value={item.value} primaryText={item.value} />
      );
    });
    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Quick Example</h3>
        </div>
        <form
          method="POST"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="box-body">
            <div className="form-filed">
              <TextField
                onChange={e =>
                  this.setState({
                    name: e.target.value,
                    errorName: ""
                  })
                }
                style={{ width: "90%" }}
                value={this.state.name}
                type="text"
                hintText=""
                floatingLabelText="Food Court Name"
                errorText={this.state.errorName}
              />
            </div>
            <div className="form-filed">
              <SelectField
                value={this.state.cuisinesAvailable}
                onChange={this.handleChangeCuisinesAvailable}
                floatingLabelText="Cuisines Available"
                style={{ width: "90%" }}
                errorText={this.state.errorCuisines}
              >
                {cuisineItem}
              </SelectField>
            </div>
            <div className="form-filed">
              <SelectField
                value={this.state.openingHours}
                onChange={this.handleChangeOpeningHours}
                floatingLabelText="Opening Hours"
                style={{ width: "90%" }}
                errorText={this.state.errorOpeningHours}
              >
                {openingHoursItem}
              </SelectField>
            </div>
            <div className="form-filed">
              <TextField
                onChange={e =>
                  this.setState({
                    phoneNumber: e.target.value,
                    errorPhoneNumber: ""
                  })
                }
                value={this.state.phoneNumber}
                multiLine={true}
                style={{ width: "90%" }}
                rows={1}
                rowsMax={3}
                type="text"
                hintText=""
                floatingLabelText="Phone Number"
                errorText={this.state.errorPhoneNumber}
              />
            </div>
            <div className="form-filed">
              <TextField
                onChange={e =>
                  this.setState({
                    description: e.target.value,
                    errorDescription: ""
                  })
                }
                value={this.state.description}
                style={{ width: "90%" }}
                multiLine={true}
                rows={3}
                rowsMax={3}
                type="text"
                hintText=""
                floatingLabelText="Description"
                errorText={this.state.errorDescription}
              />
            </div>
          </div>
          <div className="box-footer hidden-xs hidden-sm">
            <RaisedButton
              label="Update"
              primary={true}
              onClick={() => this.onSubmit()}
            />
            {this.state.error && (
              <div className="alert alert-danger alert-dismissible">
                <p>
                  <i className="icon fa fa-warning" /> {this.state.errorMessage}
                </p>
              </div>
            )}

            {this.state.success && (
              <div className="alert alert-success alert-dismissible">
                <p>
                  <i className="icon fa fa-hand-peace-o" />{" "}
                  {this.state.successMessage}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }

  _renderUserBox() {
    return (
      <div className="box box-success">
        <div className="box-header with-border">
          <div className="container">
            <div className="row">
              <div className="col-xs-4 col-sm-2 col-md-1">
                <div className="line-vertical">
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
              </div>
              <div className="col-xs-8 col-sm-10 col-md-11" />
              <p className="owner-info">{this.props.user.name}</p>
              <p>
                Member Since -{" "}
                {moment(this.props.user.created_at).format("Do MMM YYYY")}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderPhotoUpload() {
    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Upload Photos</h3>
        </div>
        <PhotoDrop
          dispatch={this.props.dispatch}
          selectedShop={this.props.selectedShop}
        />
      </div>
    );
  }

  _rennderAddNewFood() {
    return (
      <div className="box box-success">
        <div className="box-header with-border">
          <p className="box-title-new">Add Food Item</p>
          {this.props.selectedShop && !this.props.selectedShop.shop_address ? (
            <p className="incomplete-profile"><i class="fa fa-info-circle"></i> complete your shop profile info</p>
          ) : null}
          <RaisedButton
            disabled={
              this.props.selectedShop && this.props.selectedShop.shop_address
                ? false
                : true
            }
            label="Add Food Item"
            secondary={true}
            onClick={() => this.props.history.push("/add-food-item/1")}
            style={{ float: "right" }}
          />
        </div>
      </div>
    );
  }

  _renderAddressBox() {
    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Shop's Address</h3>
        </div>
        <div className="box-body">
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  address: e.target.value,
                  errorAddress: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.address ? this.state.address : ""}
              type="text"
              hintText=""
              floatingLabelText="Address"
              errorText={this.state.errorAddress}
            />
          </div>
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  streetOne: e.target.value,
                  errorStreetOne: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.streetOne ? this.state.streetOne : ""}
              type="text"
              hintText=""
              floatingLabelText="Street One"
              errorText={this.state.errorStreetOne}
            />
          </div>
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  streetTwo: e.target.value,
                  errorStreetTwo: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.streetTwo ? this.state.streetTwo : ""}
              type="text"
              hintText=""
              floatingLabelText="Street Two"
              errorText={this.state.errorStreetTwo}
            />
          </div>
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  city: e.target.value,
                  errorCity: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.city ? this.state.city : ""}
              type="text"
              hintText=""
              floatingLabelText="City"
              errorText={this.state.errorCity}
            />
          </div>
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  country: e.target.value,
                  errorCountry: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.country ? this.state.country : ""}
              type="text"
              hintText=""
              floatingLabelText="Country"
              errorText={this.state.errorCountry}
            />
          </div>
        </div>
        <div className="box-footer hidden-md hidden-lg">
          <RaisedButton
            label="Submit"
            primary={true}
            onClick={() => this.onSubmit()}
          />

          {this.state.error && (
            <div className="alert alert-danger alert-dismissible">
              <p>
                <i className="icon fa fa-warning" /> {this.state.errorMessage}
              </p>
            </div>
          )}

          {this.state.success && (
            <div className="alert alert-success alert-dismissible">
              <p>
                <i className="icon fa fa-hand-peace-o" />{" "}
                {this.state.successMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <section className="content-header">
          <h1>
            List your shops here
            <small>start earning</small>
          </h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-8">{this._renderFormBox()}</div>
            <div className="col-md-4">
              {this._renderAddressBox()}
              {this._renderUserBox()}
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              {this.state.shopPhotos && this.state.shopPhotos.length > 0 && (
                <PhotoCarousel shopPhotos={this.state.shopPhotos} />
              )}
              {this._rennderAddNewFood()}
            </div>
            <div className="col-md-4">{this._renderPhotoUpload()}</div>
          </div>
        </section>
      </>
    );
  }
}

export default UpdateShop;
