import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  render() {
    return (
      <div id="body" className="hold-transition register-page">
        <div className="register-box">
          <div className="register-logo">
            <a href="../../index2.html">
              <b>Admin</b>
              LTE
            </a>
          </div>

          <div className="register-box-body">
            <p className="login-box-msg">Register a new membership</p>

            <form method="post">
              <div className="form-group">
                <TextField
                  type="text"
                  style={{ width: "95%" }}
                  hintText="Full name"
                  floatingLabelText="Enter your name"
                />
                <span className="glyphicon glyphicon-user" />
              </div>

              <div className="form-group">
                <TextField
                  type="email"
                  style={{ width: "95%" }}
                  hintText="Email"
                  floatingLabelText="Enter your email"
                />
                <span className="glyphicon glyphicon-envelope" />
              </div>
              <div className="form-group">
                <TextField
                  type="password"
                  style={{ width: "95%" }}
                  hintText="Password"
                  floatingLabelText="Enter your password"
                />
                <span className="glyphicon glyphicon-lock" />
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    {/* <Checkbox/>
                    <label>
                      I agree to the <a href="#">terms</a>
                    </label> */}
                  </div>
                </div>
                <div className="col-xs-4">
                  <RaisedButton
                    label="Sign Up"
                    primary={true}
                    labelStyle={{
                      "fontSize": "14px",
                      "textTransform": "none"
                    }}
                  />
                </div>
              </div>
            </form>

            {/* <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a
                href="#"
                className="btn btn-block btn-social btn-facebook btn-flat"
              >
                <i className="fa fa-facebook" /> Sign up using Facebook
              </a>
              <a
                href="#"
                className="btn btn-block btn-social btn-google btn-flat"
              >
                <i className="fa fa-google-plus" /> Sign up using Google+
              </a>
            </div> */}
            <Link to="/login" className="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
