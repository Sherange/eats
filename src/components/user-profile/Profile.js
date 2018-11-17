import React, { Component } from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { GENDER } from "../../constant/constant.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {}

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

  render() {
    const genderItem = GENDER.map((item, key) => {
      return <MenuItem key={key} value={key} primaryText={item.value} />;
    });

    const selectedGender = GENDER.findIndex((item, index) => {
      return item.value == this.state.user.gender;
    });

    return (
      <div className="container-fluid">
        <div className="user-profile-wrapper">
          <div className="user-profile-section-one">
            <img
              src="/images/profile.png"
              className="user-profile-image"
              alt="userImage"
            />
            <p className="profile-label">User Details</p>
            <hr className="profile-hr" />
            <p className="profile-email">{this.state.user.email}</p>
            <br />

            <p className="profile-label">Address</p>
            <hr className="profile-hr" />
            <p className="profile-address">
              {this.state.user.user_address &&
                this.state.user.user_address.address}
            </p>
            <p className="profile-address">
              {this.state.user.user_address &&
                this.state.user.user_address.street_one}
            </p>
            <p className="profile-address">
              {this.state.user.user_address &&
                this.state.user.user_address.street_two}
            </p>
            <br />

            <p className="profile-label">City</p>
            <hr className="profile-hr" />
            <p className="profile-address">
              {this.state.user.user_address &&
                this.state.user.user_address.city}
            </p>
            <br />

            <p className="profile-label">Country</p>
            <hr className="profile-hr" />
            <p className="profile-address">
              {this.state.user.user_address &&
                this.state.user.user_address.country}
            </p>
            <br />

            <p className="profile-label">Description</p>
            <hr className="profile-hr" />
            <p className="profile-address">
              {this.state.user && this.state.user.description}
            </p>
          </div>

          <div className="user-profile-section-two">
            <div />
            <img
              src="https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2018/10/yimg_W6jPi8-640x427.jpg"
              className="user-profile-image-sm"
              alt="userImage"
            />
            <p className="profile-name">{this.state.user.name}</p>

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
                  value={String(this.state.user.phone_number)}
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
                  hintText="Controlled Date Input"
                  style={{ width: "90%" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <h4 className="profile-from-label">Gender :</h4>
              </div>
              <div className="col-md-10">
                <SelectField
                  value={selectedGender}
                  onChange={this.handleChangeGender}
                  style={{ width: "90%" }}
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
                  value={this.state.user.description}
                  onChange={this.handleChangeDescription}
                  style={{ width: "90%" }}
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
                <TextField hintText="address" />
                <br />
                <TextField hintText="street" />
                <br />
                <TextField hintText="street" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <h4 className="profile-from-label">City :</h4>
              </div>
              <div className="col-md-10">
                {/* <p className="profile-from-address" /> */}
                <TextField hintText="" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <h4 className="profile-from-label">Country :</h4>
              </div>
              <div className="col-md-10">
                {/* <p className="profile-from-address" /> */}
                <TextField hintText="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
