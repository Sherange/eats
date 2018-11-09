import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    this.props.history.push("/profile");
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
            {/* <!-- Messages: style can be found in dropdown.less--> */}
            <li className="dropdown messages-menu">
              {/* <!-- Menu toggle button --> */}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o" />
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  {/* <!-- inner menu: contains the messages --> */}
                  <ul className="menu">
                    <li>
                      {/* <!-- start message --> */}
                      <a href="#">
                        <div className="pull-left">
                          {/* <!-- User Image --> */}
                          <img
                            src="dist/img/user2-160x160.jpg"
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        {/* <!-- Message title and timestamp --> */}
                        <h4>
                          Support Team
                          <small>
                            <i className="fa fa-clock-o" /> 5 mins
                          </small>
                        </h4>
                        {/* <!-- The message --> */}
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    {/* <!-- end message --> */}
                  </ul>
                  {/* <!-- /.menu --> */}
                </li>
                <li className="footer">
                  <a href="#">See All Messages</a>
                </li>
              </ul>
            </li>
            {/* <!-- /.messages-menu --> */}

            {/* <!-- Notifications Menu --> */}
            <li className="dropdown notifications-menu">
              {/* <!-- Menu toggle button --> */}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 10 notifications</li>
                <li>
                  {/* <!-- Inner Menu: contains the notifications --> */}
                  <ul className="menu">
                    <li>
                      {/* <!-- start notification --> */}
                      <a href="#">
                        <i className="fa fa-users text-aqua" /> 5 new members
                        joined today
                      </a>
                    </li>
                    {/* <!-- end notification --> */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li>
            {/* <!-- Tasks Menu --> */}
            <li className="dropdown tasks-menu">
              {/* <!-- Menu Toggle Button --> */}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o" />
                <span className="label label-danger">9</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 9 tasks</li>
                <li>
                  {/* <!-- Inner menu: contains the tasks --> */}
                  <ul className="menu">
                    <li>
                      {/* <!-- Task item --> */}
                      <a href="#">
                        {/* <!-- Task title and progress text --> */}
                        <h3>
                          Design some buttons
                          <small className="pull-right">20%</small>
                        </h3>
                        {/* <!-- The progress bar --> */}
                        <div className="progress xs">
                          {/* <!-- Change the css width attribute to simulate progress --> */}
                          <div
                            className="progress-bar progress-bar-aqua"
                            style={{ width: "20%" }}
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* <!-- end task item --> */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>
            {/* <!-- User Account Menu --> */}
            <li className="dropdown user user-menu">
              {/* <!-- Menu Toggle Button --> */}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                {/* <!-- The user image in the navbar--> */}
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
            {/* <!-- Control Sidebar Toggle Button --> */}
            <li>
              <a href="#" data-toggle="control-sidebar">
                <i className="fa fa-gears" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
