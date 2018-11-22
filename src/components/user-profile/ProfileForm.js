import React, { Component } from "react";
import {
  TextField,
  DatePicker,
  SelectField,
  MenuItem,
  RaisedButton
} from "material-ui";
import { GENDER } from "../../constant/constant.js";
import moment from "moment";
import { updateUser } from "../../actions/userActions";
import { USER_UPDATE_ERROR, USER_UPDATE_SUCCESS } from "../../actions/types";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],

      error: false,
      errorMessage: "",

      success: false,
      successMessage: "",

      errorPhoneNumber: "",
      errorBirthDate: "",
      errorGender: "",
      errorDescription: "",
      errorAddress: "",
      errorCity: ""
    };
    this.validation = this.validation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.error === true) {
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" }, state => {
          this.props.dispatch({ type: USER_UPDATE_ERROR, payload: "" });
        });
      }, 2000);
    }

    if (this.state.success === true) {
      setTimeout(() => {
        this.setState({ success: false, successMessage: "" }, state => {
          this.props.dispatch({ type: USER_UPDATE_SUCCESS, payload: "" });
        });
      }, 2000);
    }

    if (this.state.error === false && this.props.userUpdateError !== "") {
      this.setState({
        error: true,
        errorMessage: this.props.userUpdateError
      });
    }

    if (this.state.success === false && this.props.userUpdateSuccess !== "") {
      this.setState({
        success: true,
        successMessage: this.props.userUpdateSuccess
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let selectedGender = GENDER.find((item, index) => {
      return item.key === nextProps.user.gender;
    });

    if (nextProps.user && nextProps.user.id !== prevState.user.id) {
      nextProps.user.gender = selectedGender.value;
      nextProps.user.genderIndex = selectedGender.key;
      return { user: nextProps.user };
    }
    return null;
  }

  handleChangePhoneNumber = event => {
    const { user } = this.state;
    user.phone_number = event.target.value;
    this.setState({ user, errorPhoneNumber: "" });
  };

  handleChangeGender = (event, index, value) => {
    const { user } = this.state;
    user.gender = value;
    user.genderIndex = index;
    this.setState({ user, errorGender: "" });
  };

  handleChangeDescription = event => {
    const { user } = this.state;
    user.description = event.target.value;
    this.setState({ user, errorDescription: "" });
  };

  handleChangeDate = (event, date) => {
    const { user } = this.state;
    user.date_of_birth = moment(date).format("YYYY-MM-DD");
    this.setState({ user, errorBirthDate: "" });
  };

  handleChangeAddress = event => {
    const { user } = this.state;
    if (user.user_address) {
      user.user_address.address = event.target.value;
    } else {
      user.user_address = { address: event.target.value };
    }
    this.setState({ user, errorAddress: "" });
  };

  handleChangeStreetOne = event => {
    const { user } = this.state;
    if (user.user_address) {
      user.user_address.street_one = event.target.value;
    } else {
      user.user_address = { street_one: event.target.value };
    }
    this.setState({ user });
  };

  handleChangeStreetTwo = event => {
    const { user } = this.state;
    if (user.user_address) {
      user.user_address.street_two = event.target.value;
    } else {
      user.user_address = { street_two: event.target.value };
    }
    this.setState({ user });
  };

  handleChangeCity = event => {
    const { user } = this.state;
    user.user_address.city = event.target.value;
    this.setState({ user, errorCity: "" });
  };

  validation() {
    if (
      this.state.user.phone_number === "" ||
      this.state.user.phone_number === null
    ) {
      this.setState({ errorPhoneNumber: "Phone number required" });
      return false;
    } else if (
      this.state.user.date_of_birth === "" ||
      this.state.user.date_of_birth === null
    ) {
      this.setState({ errorBirthDate: "Date of birth required" });
      return false;
    } else if (
      this.state.user.gender === "" ||
      this.state.user.gender === null
    ) {
      this.setState({ errorGender: "Gender is required" });
      return false;
    } else if (
      this.state.user.description === "" ||
      this.state.user.description === null
    ) {
      this.setState({ errorDescription: "Description required" });
      return false;
    } else if (
      this.state.user.user_address === null ||
      this.state.user.user_address.address === "" ||
      this.state.user.user_address.address === null
    ) {
      this.setState({ errorAddress: "Address required" });
      return false;
    } else if (
      !this.state.user.user_address.city ||
      this.state.user.user_address.city === "" ||
      this.state.user.user_address.city === null
    ) {
      this.setState({ errorCity: "City can't be blank" });
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.validation() === true) {
      this.props.dispatch(updateUser(this.state.user));
    }
  }

  render() {
    const genderItem = GENDER.map((item, key) => {
      return <MenuItem key={key} value={item.value} primaryText={item.value} />;
    });

    const textStyle = {
      fontSize: "18px",
      color: "#2c3e50",
      fontFamily: "Source Sans Pro"
    };

    return (
      <div className="user-profile-section-two">
        <p className="profile-name">
          {this.state.user.name}'s Profile Infromation
        </p>

        <div className="border">
          <img
            src={
              this.props.user.image_path
                ? this.props.user.image_path
                : " /images/profile.png"
            }
            className="user-profile-image-sm"
            alt="userImage"
          />

          <div className="box-one">
            <p className="profile-rating">User Rating</p>
            <p className="profile-box-label bg-green">4.5</p>
          </div>

          <div className="box-two">
            <p className="profile-rating">Order Count</p>
            <p className="profile-box-label bg-green">4.5</p>
          </div>

          <div className="box-three">
            <p className="profile-rating">Shops Count</p>
            <p className="profile-box-label bg-green">4.5</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Email :</h4>
          </div>
          <div className="col-md-10">
            <h4 className="profile-from-text">{this.state.user.email}</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Phone Number :</h4>
          </div>
          <div className="col-md-10">
            {/* <p className="profile-from-address" /> */}
            <TextField
              type="text"
              id="user-phone-number"
              inputStyle={textStyle}
              value={
                this.state.user.phone_number ? this.state.user.phone_number : ""
              }
              onChange={this.handleChangePhoneNumber}
              errorText={this.state.errorPhoneNumber}
              style={{ width: "90%" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Birth Date :</h4>
          </div>
          <div className="col-md-10">
            {/* <p className="profile-from-text">1st Aug 1996</p> */}
            <DatePicker
              id="user-birthdate"
              formatDate={date =>
                moment(date, "YYYY-MM-DD").format("Do MMM YY")
              }
              onChange={this.handleChangeDate}
              openToYearSelection={true}
              value={
                this.state.user.date_of_birth
                  ? moment(this.state.user.date_of_birth).toDate()
                  : null
              }
              style={{ width: "90%" }}
              errorText={this.state.errorBirthDate}
              textFieldStyle={textStyle}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Gender :</h4>
          </div>
          <div className="col-md-10">
            <SelectField
              id="user-gender"
              value={this.state.user.gender ? this.state.user.gender : ""}
              onChange={this.handleChangeGender}
              style={{ width: "90%" }}
              labelStyle={textStyle}
              errorText={this.state.errorGender}
            >
              {genderItem}
            </SelectField>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Description :</h4>
          </div>
          <div className="col-md-10">
            <TextField
              id="user-description"
              value={
                this.state.user.description ? this.state.user.description : ""
              }
              onChange={this.handleChangeDescription}
              style={{ width: "90%" }}
              errorText={this.state.errorDescription}
              inputStyle={textStyle}
              multiLine={true}
              rows={1}
              rowsMax={5}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Address :</h4>
          </div>
          <div className="col-md-10">
            {/* <p className="profile-from-address" /> */}
            <TextField
              id="user-address"
              hintText="address"
              value={
                this.state.user.user_address &&
                this.state.user.user_address.address
                  ? this.state.user.user_address.address
                  : ""
              }
              onChange={this.handleChangeAddress}
              errorText={this.state.errorAddress}
              style={{ width: "90%" }}
              inputStyle={textStyle}
            />
            <br />
            <TextField
              id="user-street-one"
              hintText="street"
              value={
                this.state.user.user_address &&
                this.state.user.user_address.street_one
                  ? this.state.user.user_address.street_one
                  : ""
              }
              onChange={this.handleChangeStreetOne}
              style={{ width: "90%" }}
              inputStyle={textStyle}
            />
            <br />
            <TextField
              id="user-street-two"
              hintText="street"
              value={
                this.state.user.user_address &&
                this.state.user.user_address.street_two
                  ? this.state.user.user_address.street_two
                  : ""
              }
              onChange={this.handleChangeStreetTwo}
              style={{ width: "90%" }}
              inputStyle={textStyle}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">City :</h4>
          </div>
          <div className="col-md-10">
            {/* <p className="profile-from-address" /> */}
            <TextField
              id="user-city"
              type="text"
              value={
                this.state.user.user_address &&
                this.state.user.user_address.city
                  ? this.state.user.user_address.city
                  : ""
              }
              onChange={this.handleChangeCity}
              errorText={this.state.errorCity}
              style={{ width: "90%" }}
              inputStyle={textStyle}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <h4 className="profile-from-label">Country :</h4>
          </div>
          <div className="col-md-10">
            {/* <p className="profile-from-address" /> */}
            <TextField
              id="user-country"
              type="text"
              underlineShow={false}
              value={"Sri Lanka"}
              disabled={true}
              style={{ width: "90%" }}
              inputStyle={textStyle}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-2">
            <RaisedButton
              label="Save"
              primary={true}
              labelStyle={{ textTransform: "none" }}
              onClick={() => this.onSubmit()}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-md-offset-4" style={{ margin: "10" }}>
            {this.state.error && (
              <div className="alert alert-danger alert-dismissible">
                <p>
                  <i className="icon fa fa-warning" /> {this.state.errorMessage}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-md-offset-4" style={{ margin: "10" }}>
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
      </div>
    );
  }
}

export default ProfileForm;
