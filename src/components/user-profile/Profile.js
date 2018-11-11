import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="hidden-xs hidden-sm col-md-4">
            <div className="user-profile-section-one">Here</div>
          </div>
          <div className="col-md-8">
            <div className="user-profile-section-two">Here</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
