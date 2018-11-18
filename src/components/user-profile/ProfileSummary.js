import React, { Component } from "react";
import { FlatButton, LinearProgress } from "material-ui";
import { uploadProfilePic } from "../../actions/userActions";
class ProfileSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPhoto: ""
    };
  }

  handleUplaod = event => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    this.props.dispatch(uploadProfilePic(formData, this.props.user.id));
  };

  render() {
    return (
      <div className="user-profile-section-one">
        <img
          src={
            this.props.user.image_path
              ? this.props.user.image_path
              : " /images/profile.png"
          }
          className="user-profile-image"
          alt="userImage"
        />
        {this.props.isFetching && <LinearProgress mode="indeterminate" />}
        <FlatButton
          labelStyle={{ textTransform: "none" }}
          label="Upload Profile Image"
          labelPosition="before"
          containerElement="label"
          fullWidth={true}
        >
          <input
            type="file"
            className="upload-input"
            onChange={event => {
              this.handleUplaod(event);
            }}
          />
        </FlatButton>
        <p className="profile-label">User Details</p>
        <hr className="profile-hr" />
        <p className="profile-email">{this.props.user.email}</p>
        <br />

        <p className="profile-label">Address</p>
        <hr className="profile-hr" />
        {this.props.user.user_address &&
        this.props.user.user_address.address ? (
          <p className="profile-address">
            {this.props.user.user_address.address}
          </p>
        ) : (
          <p className="complete-text">Complete your profile</p>
        )}
        <p className="profile-address">
          {this.props.user.user_address &&
            this.props.user.user_address.street_one}
        </p>
        <p className="profile-address">
          {this.props.user.user_address &&
            this.props.user.user_address.street_two}
        </p>
        <br />

        <p className="profile-label">City</p>
        <hr className="profile-hr" />
        {this.props.user.user_address && this.props.user.user_address.city ? (
          <p className="profile-address">{this.props.user.user_address.city}</p>
        ) : (
          <p className="complete-text">Complete your profile</p>
        )}
        <br />

        <p className="profile-label">Country</p>
        <hr className="profile-hr" />
        {this.props.user.user_address &&
        this.props.user.user_address.country ? (
          <p className="profile-address">
            {this.props.user.user_address.country}
          </p>
        ) : (
          <p className="complete-text">Complete your profile</p>
        )}
        <br />

        <p className="profile-label">Description</p>
        <hr className="profile-hr" />
        {this.props.user.description ? (
          <p className="profile-address">
            {this.props.user && this.props.user.description}
          </p>
        ) : (
          <p className="complete-text">Complete your profile</p>
        )}
      </div>
    );
  }
}

export default ProfileSummary;
