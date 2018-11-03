import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";
import { USER_REGISTRATION_ERROR } from "../../actions/types";

import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { Link } from "react-router-dom";

class Registration extends Component {
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
    // this.props.history.push('/');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userRegistrationError) {
      setTimeout(() => {
        return { error: false, errorMessage: "" };
      }, 3000);
      return { error: true, errorMessage: nextProps.userRegistrationError };
    }
    if (nextProps.authenticated === true) {
      nextProps.history.push("/");
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.state.error == true) {
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" }, state => {
          this.props.dispatch({ type: USER_REGISTRATION_ERROR, payload: "" });
        });
      }, 3000);
    }
  }

  onSubmit() {
    if (this.validate()) {
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      this.props.dispatch(registerUser(data));
    }
  }

  validate() {
    if (this.state.name === "") {
      this.setState(
        { error: true, errorMessage: "User name required" },
        state => {
          setTimeout(() => {
            this.setState({ error: false, errorMessage: "" });
          }, 3000);
        }
      );
      return false;
    } else if (this.state.email === "") {
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
                  onChange={e => this.setState({ name: e.target.value })}
                  value={this.state.name}
                  type="text"
                  style={{ width: "95%" }}
                  hintText="Full name"
                  floatingLabelText="Enter your name"
                  // floatingLabelText="Enter your password"
                />
                <span className="glyphicon glyphicon-user" />
              </div>

              <div className="form-group">
                <TextField
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email}
                  type="email"
                  style={{ width: "95%" }}
                  hintText="Email"
                  floatingLabelText="Enter your email"
                  // floatingLabelText="Enter your password"
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
                  floatingLabelText="Enter your password"
                  // floatingLabelText="Enter your password"
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

            {this.props.isFetching && (
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

const mapStateToProps = state => ({
  user: state.user.user,
  authenticated: state.user.authenticated,
  isFetching: state.user.isFetching,
  userRegistrationError: state.user.userRegistrationError
});

export default connect(mapStateToProps)(Registration);
