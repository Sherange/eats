import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { registerShop } from "../../actions/shopActions";
import {
  SHOP_REGISTRATION_ERROR,
  SHOP_REGISTRATION_SUCCESS
} from "../../actions/types";

class AddShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cuisinesAvailable: "",
      openingHours: "",
      address: "",
      phoneNumber: "",
      description: "",

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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.shopRegistrationError) {
      return { error: true, errorMessage: nextProps.shopRegistrationError };
    }
    if (nextProps.shopRegistrationSuccess)
      return {
        success: true,
        successMessage: nextProps.shopRegistrationSuccess
      };
    return null;
  }

  componentDidUpdate(nextProps) {
    if (this.state.error === true) {
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" }, state => {
          nextProps.dispatch({ type: SHOP_REGISTRATION_ERROR, payload: "" });
        });
      }, 2000);
    }
    if (this.state.success === true) {
      setTimeout(() => {
        this.setState({ success: false, successMessage: "" }, state => {
          nextProps.dispatch({ type: SHOP_REGISTRATION_SUCCESS, payload: "" });
          this.props.history.push("/myshops");
        });
      }, 2000);
    }
  }

  handleChange = (event, index, value) =>
    this.setState({
      cuisinesAvailable: value,
      errorCuisines: ""
    });

  handleChangeOpeningHours = (event, index, value) => {
    this.setState({
      openingHours: value,
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
        name: this.state.name,
        cuisines_available: this.state.cuisinesAvailable,
        opening_hours: this.state.openingHours,
        phone_number: this.state.phoneNumber,
        address: this.state.address,
        description: this.state.description,
        user_id: this.props.user.id
      };
      this.props.dispatch(registerShop(data));
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
              <div className="box box-info">
                <div className="box-header with-border">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-4 col-sm-2 col-md-1">
                        <div className="line-vertical">
                          <img
                            src="/images/profile.png"
                            className="img-circle"
                            style={{ width: "100%" }}
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div className="col-xs-8 col-sm-10 col-md-11" />
                      <h3>{this.props.user.name}</h3>
                      <p>Member Since - </p>
                    </div>
                  </div>

                  {/* <h3 className="box-title">Quick Example</h3> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AddShop;
