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

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.id !== prevState.user.id) {
      return { user: nextProps.user };
    }
    return null;
  }

  handleChangePhoneNumber = event => {
    const { user } = this.state;
    user.phone_number = event.target.value;
    this.setState({ user });
  };

  handleChangeGender = (event, index, value) => {
    const { user } = this.state;
    const selectedGender = GENDER.find((item, key) => {
      return item.key === index;
    });
    user.gender = selectedGender.value;
    this.setState({ user });
  };

  handleChangeDescription = event => {
    const { user } = this.state;
    user.description = event.target.value;
    this.setState({ user });
  };

  handleChangeDate = (event, date) => {
    const { user } = this.state;
    user.date_of_birth = moment(date).format("YYYY-MM-DD");
    this.setState({ user });
  };

  handleChangeAddress = event => {
    const { user } = this.state;
    user.user_address.address = event.target.value;
    this.setState({ user });
  };

  handleChangeStreetOne = event => {
    const { user } = this.state;
    user.user_address.street_one = event.target.value;
    this.setState({ user });
  };

  handleChangeStreetTwo = event => {
    const { user } = this.state;
    user.user_address.street_two = event.target.value;
    this.setState({ user });
  };

  handleChangeCity = event => {
    const { user } = this.state;
    user.user_address.city = event.target.value;
    this.setState({ user });
  };

  onSubmit() {
    this.props.dispatch(updateUser(this.state.user));
  }

  render() {
    const genderItem = GENDER.map((item, key) => {
      return <MenuItem key={key} value={key} primaryText={item.value} />;
    });

    const selectedGender = GENDER.findIndex((item, index) => {
      return item.value === this.state.user.gender;
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
            src="/images/profile.png"
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
                this.state.user.phone_number
                  ? String(this.state.user.phone_number)
                  : ""
              }
              onChange={this.handleChangePhoneNumber}
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
              id={"user-gender"}
              value={selectedGender}
              onChange={this.handleChangeGender}
              style={{ width: "90%" }}
              labelStyle={textStyle}
              // errorText={this.state.errorOpeningHours}
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
              label="Update"
              primary={true}
              onClick={() => this.onSubmit()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileForm;
