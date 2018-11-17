import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { logoutUser } from "../../actions/userActions";
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }

  logOut() {
    this.props.dispatch(logoutUser(this.props.history));
  }

  goToProfile() {
    this.props.history.push("/user-profile");
  }

  goToLogin() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <nav className="navbar navbar-static-top" role="navigation">
        {/* <!-- Sidebar toggle button--> */}
        <a
          href="#"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </a>
        {/* <!-- Navbar Right Menu --> */}
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              {/* <!-- Menu Toggle Button --> */}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img
                  src="/images/profile.png"
                  className="user-image"
                  alt="User Image"
                />
                {/* <!-- hidden-xs hides the username on small devices so only the image appears. --> */}
                <span className="hidden-xs">{this.props.user.name}</span>
              </a>
              <ul className="dropdown-menu">
                {/* <!-- The user image in the menu --> */}
                <li className="user-header">
                  <img
                    src="/images/profile.png"
                    className="img-circle"
                    alt="User Image"
                  />

                  <p>
                    {this.props.user.name}
                    <small>Member since Nov. 2012</small>
                  </p>
                </li>
                <li className="user-footer">
                  <div className="pull-left">
                    <RaisedButton
                      onClick={() => this.goToProfile()}
                      label="Profile"
                      primary={true}
                      labelStyle={{
                        fontSize: "14px",
                        textTransform: "none"
                      }}
                    />
                  </div>
                  {this.props.user ? (
                    <div className="pull-right">
                      <RaisedButton
                        onClick={() => this.logOut()}
                        label="Logout"
                        primary={true}
                        labelStyle={{
                          fontSize: "14px",
                          textTransform: "none"
                        }}
                      />
                    </div>
                  ) : (
                    <div className="pull-right">
                      <RaisedButton
                        onClick={() => this.goToLogin()}
                        label="Login"
                        primary={true}
                        labelStyle={{
                          fontSize: "14px",
                          textTransform: "none"
                        }}
                      />
                    </div>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
