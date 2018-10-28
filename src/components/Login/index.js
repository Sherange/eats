import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div id="body" className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>
              LTE
            </a>
          </div>

          {/* <!-- /.login-logo --> */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form method="post">
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
                    {/* <Checkbox />
                    <label>Remember Me</label> */}
                  </div>
                </div>
                <div className="col-xs-4">
                  <RaisedButton
                    label="Sign In"
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
                <i className="fa fa-facebook" /> Sign in using Facebook
              </a>
              <a
                href="#"
                className="btn btn-block btn-social btn-google btn-flat"
              >
                <i className="fa fa-google-plus" /> Sign in using Google+
              </a>
            </div> */}

            <Link to="/password-reset" className="text-center">
              I forgot my password
            </Link>
            <br />
            <Link to="/register" className="text-center">
              Register a new membership
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
