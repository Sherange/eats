import React, { Component } from "react";
import TextField from "material-ui/TextField";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
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

            <p className="profile-email">sherangef@gmail.com</p>
            <br />

            <p className="profile-label">Address</p>
            <hr className="profile-hr" />

            <p className="profile-address">No : 68/4 Parakrama Mawatha</p>
            <p className="profile-address">Panadura</p>
            <p className="profile-address">Sri Lanka</p>
            <br />

            <p className="profile-label">Description</p>
            <hr className="profile-hr" />
            <p className="profile-address">
              dsfsdf sfas fsdf sfsd sdfsdf sdfsdf sd sdfsdfsdf sdsadadaS DASDASD
              SDSADASD ASDASDAS SADASA DSas dasdasd sdasdasd asdsad dsadAS{" "}
            </p>
          </div>

          <div className="user-profile-section-two">
            <div />
            <img
              src="https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2018/10/yimg_W6jPi8-640x427.jpg"
              className="user-profile-image-sm"
              alt="userImage"
            />
            <p className="profile-name">Sherange</p>

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
                <h4 className="profile-from-text">sherangef@gmail.com</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <h4 className="profile-from-label">Address :</h4>
              </div>
              <div className="col-md-10">
                <p
                  className="profile-from-address"
                  style={{ marginTop: "10px" }}
                >
                  No : 68/4 Parakrama MAwatha
                </p>
                <p className="profile-from-address">Panadura</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <h4 className="profile-from-label">Birth Date :</h4>
              </div>
              <div className="col-md-10">
                <p className="profile-from-text">1st Aug 1996</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <h4 className="profile-from-label">Gender :</h4>
              </div>
              <div className="col-md-10">
                <TextField hintText="Hint Text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
