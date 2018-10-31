import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      isFetching: false,
      error: false,
      errorMessage: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {}

  onSubmit() {
    if (this.validate()) {
      this.setState({ isFetching: true });
      const data = {
        grant_type: "password",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        username: this.state.email,
        password: this.state.password
      };
      Axios.post(process.env.REACT_APP_AUTH_URL + "oauth/token", data)
        //.then( response => response.json())
        .then(response => {
          if (response.data.error) {
            console.log("error", response.data.error);
          }
          localStorage.setItem(
            "access_token",
            "Bearer " + response.data.access_token
          );
          this.props.history.push("/");
        })
        .catch(error => {
          if (error.response && error.response.data.message) {
            this.setState(
              {
                isFetching: false,
                error: true,
                errorMessage: error.response.data.message
              },
              state => {
                setTimeout(() => {
                  this.setState({ error: false, errorMessage: "" });
                }, 3000);
              }
            );
          }
        });
    }
  }

  validate() {
    if (this.state.email === "") {
      this.setState(
        { error: true, errorMessage: "Email is reguired" },
        state => {
          setTimeout(() => {
            this.setState({ error: false, errorMessage: "" });
          }, 3000);
        }
      );
      return false;
    } else if (this.state.password === "") {
      this.setState(
        { error: true, errorMessage: "Password is reguired" },
        state => {
          setTimeout(() => {
            this.setState({ error: false, errorMessage: "" });
          }, 3000);
        }
      );
      return false;
    }
    return true;
  }

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

          {/* login-logo */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            {!this.state.isFetching && (
              <form onSubmit={e => e.preventDefault()} method="post">
                <div className="form-group">
                  <TextField
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    type="email"
                    style={{ width: "95%" }}
                    hintText="Email"
                    floatingLabelText="Enter your email"
                    // errorText="This field is required"
                  />
                  <span className="glyphicon glyphicon-envelope" />
                </div>
                <div className="form-group">
                  <TextField
                    onChange={e => this.setState({ password: e.target.value })}
                    value={this.state.password}
                    type="password"
                    style={{ width: "95%" }}
                    hintText="Password"
                    // floatingLabelText="Enter your password"
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
                      onClick={() => this.onSubmit()}
                      label="Sign In"
                      primary={true}
                      labelStyle={{
                        fontSize: "14px",
                        textTransform: "none"
                      }}
                    />
                  </div>
                </div>
              </form>
            )}

            {this.state.isFetching && (
              <CircularProgress
                size={60}
                style={{
                  display: "block",
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              />
            )}

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

            {this.state.error && (
              <div className="alert alert-danger alert-dismissible">
                <p>
                  <i className="icon fa fa-warning" /> {this.state.errorMessage}
                </p>
              </div>
            )}

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
