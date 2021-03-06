import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { logoutUser } from "../../actions/userActions";
import { Link } from "react-router-dom";
import moment from "moment";
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
        <Link
          to="#"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </Link>
        {/* <!-- Navbar Right Menu --> */}
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="user user-menu">
              <Link to="/orders" className="dropdown-toggle">
                <img
                  src="/images/cart.png"
                  className="user-image"
                  alt="UserImage"
                />
                {this.props.orders && this.props.orders.length > 0 && (
                  <div className="label label-danger">
                    {this.props.orders.length} Items
                  </div>
                )}
                {/* <!-- hidden-xs hides the username on small devices so only the image appears. --> */}
                <span className="hidden-xs">Cart</span>
              </Link>
            </li>
            <li className="dropdown user user-menu">
              {/* <!-- Menu Toggle Button --> */}
              <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                <img
                  src={
                    this.props.user.image_path
                      ? this.props.user.image_path
                      : "/images/profile.png"
                  }
                  className="user-image"
                  alt="UserImage"
                />
                {/* <!-- hidden-xs hides the username on small devices so only the image appears. --> */}
                <span className="hidden-xs">{this.props.user.name}</span>
              </Link>
              <ul className="dropdown-menu">
                {/* <!-- The user image in the menu --> */}
                <li className="user-header">
                  <img
                    src={
                      this.props.user.image_path
                        ? this.props.user.image_path
                        : "/images/profile.png"
                    }
                    className="img-circle"
                    alt="UserImage"
                  />

                  <p>
                    {this.props.user.name}
                    <small>
                      Member since{" "}
                      {moment(this.props.user.created_at).format("Do MMM YYYY")}
                    </small>
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
