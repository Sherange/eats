import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import { Link, browserHistory } from "react-router-dom";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",

      error: false,
      errorMessage: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    console.log("props", this.props);
    // this.props.history.push('/');
  }

  onSubmit() {
    if (this.validate()) {
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      axios
        .post(process.env.REACT_APP_API_URL_AUTH + "register", data)
        // .then(response => response.json())
        .then(response => {
          this.props.history.push("/");
        })
        .catch(error => {
          if (error.response && error.response.data.message) {
            this.setState(
              { error: true, errorMessage: error.response.data.message },
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
    if (this.state.name == "") {
      this.setState(
        { error: true, errorMessage: "User name required" },
        state => {
          setTimeout(() => {
            this.setState({ error: false, errorMessage: "" });
          }, 3000);
        }
      );
      return false;
    } else if (this.state.email == "") {
      this.setState(
        { error: true, errorMessage: "User email required" },
        state => {
          setTimeout(() => {
            this.setState({ error: false, errorMessage: "" });
          }, 3000);
        }
      );
      return false;
    } else if (this.state.password == "") {
      this.setState(
        { error: true, errorMessage: "Password required" },
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
            <form onSubmit={event => event.preventDefault()} method="post">
              <div className="form-group">
                <TextField
                  type="text"
                  onChange={e => this.setState({ name: e.target.value })}
                  style={{ width: "95%" }}
                  hintText="Full name"
                  floatingLabelText="Enter your name"
                />
                <span className="glyphicon glyphicon-user" />
              </div>

              <div className="form-group">
                <TextField
                  type="email"
                  onChange={e => this.setState({ email: e.target.value })}
                  style={{ width: "95%" }}
                  hintText="Email"
                  floatingLabelText="Enter your email"
                />
                <span className="glyphicon glyphicon-envelope" />
              </div>
              <div className="form-group">
                <TextField
                  type="password"
                  onChange={e => this.setState({ password: e.target.value })}
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
                    onClick={() => this.onSubmit()}
                    label="Sign Up"
                    primary={true}
                    labelStyle={{
                      fontSize: "14px",
                      textTransform: "none"
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

            {this.state.error && (
              <div className="alert alert-danger alert-dismissible">
                <p>
                  <i className="icon fa fa-warning" /> {this.state.errorMessage}
                </p>
              </div>
            )}
            <Link to="/login" className="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
