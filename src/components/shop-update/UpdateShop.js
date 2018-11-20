import React, { Component } from "react";
import {
  TextField,
  RaisedButton,
  SelectField,
  MenuItem,
  FlatButton
} from "material-ui";
import { updateShop } from "../../actions/shopActions";
import {
  SHOP_REGISTRATION_ERROR,
  SHOP_REGISTRATION_SUCCESS
} from "../../actions/types";
import PhotoDrop from "./PhotoDrop";
import moment from "moment";
import PhotoCarousel from "./PhotoCarousel";

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
          this.props.history.push("/myshops");
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
      this.setState({
        id: this.props.selectedShop.id,
        name: this.props.selectedShop.name,
        cuisinesAvailable: this.props.selectedShop.cuisines_available,
        openingHours: this.props.selectedShop.opening_hours,
        phoneNumber: this.props.selectedShop.phone_number,
        description: this.props.selectedShop.description,
        address: this.props.selectedShop.address,
        streetOne: this.props.selectedShop.street_one,
        streetTwo: this.props.selectedShop.street_two,
        city: this.props.selectedShop.city,
        country: this.props.selectedShop.country,
        status: this.props.selectedShop.status
      });
    }
  }

  handleChangeCuisinesAvailable = (event, index, value) =>
    this.setState({
      cuisinesAvailable: value,
      cuisinesAvailableIndex: index,
      errorCuisines: ""
    });

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
        cuisines_available: this.state.cuisinesAvailable,
        opening_hours: this.state.openingHours,
        phone_number: this.state.phoneNumber,
        address: this.state.address,
        description: this.state.description,
        user_id: this.props.user.id,
        status: this.state.status
      };
      this.props.dispatch(updateShop(data));
    }
  }

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText="Never" />,
      <MenuItem key={2} value={2} primaryText="Every Night" />,
      <MenuItem key={3} value={3} primaryText="Weeknights" />,
      <MenuItem key={4} value={4} primaryText="Weekends" />,
      <MenuItem key={5} value={5} primaryText="Weekly" />
    ];

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
            <div className="col-md-8">
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
                        onChange={this.handleChange}
                        floatingLabelText="Cuisines Available"
                        style={{ width: "90%" }}
                        errorText={this.state.errorCuisines}
                      >
                        {items}
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
                        {items}
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
                            address: e.target.value,
                            errorAddress: ""
                          })
                        }
                        value={this.state.address}
                        multiLine={true}
                        style={{ width: "90%" }}
                        rows={1}
                        rowsMax={3}
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
                            description: e.target.value,
                            errorDescription: ""
                          })
                        }
                        value={this.state.description}
                        style={{ width: "90%" }}
                        multiLine={true}
                        rows={1}
                        rowsMax={3}
                        type="text"
                        hintText=""
                        floatingLabelText="Description"
                        errorText={this.state.errorDescription}
                      />
                    </div>
                  </div>

                  <div className="box-footer">
                    {this.props.selectedShop && this.props.selectedShop.id ? (
                      <RaisedButton
                        label="Update"
                        primary={true}
                        onClick={() => this.onSubmit()}
                      />
                    ) : (
                      <RaisedButton
                        label="Submit"
                        primary={true}
                        onClick={() => this.onSubmit()}
                      />
                    )}

                    {this.state.error && (
                      <div className="alert alert-danger alert-dismissible">
                        <p>
                          <i className="icon fa fa-warning" />{" "}
                          {this.state.errorMessage}
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
            </div>
            <div className="col-md-4">
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
                        {moment(this.props.user.created_at).format(
                          "Do MMM YYYY"
                        )}{" "}
                      </p>
                    </div>
                  </div>

                  {/* <h3 className="box-title">Quick Example</h3> */}
                </div>
              </div>

              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Upload Photos</h3>
                </div>
                <PhotoDrop
                  dispatch={this.props.dispatch}
                  selectedShop={this.props.selectedShop}
                />
              </div>

              <div className="box box-success">
                <div className="box-header with-border">
                  <h3 className="box-title">Add Food Item</h3>
                </div>
                <p>Add new food item to your shop</p>
                <FlatButton
                  label="Add Food Item"
                  onClick={() => this.props.history.push("/add-food-item/1")}
                />
              </div>
            </div>
          </div>

          <PhotoCarousel
            user={this.props.user}
            shop={this.props.selectedShop}
          />
        </section>
      </>
    );
  }
}

export default UpdateShop;
