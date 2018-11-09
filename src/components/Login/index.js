import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/userActions";
import { USER_LOGIN_ERROR } from "../../actions/types";

class Login extends Component {
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userLoginError) {
      return { error: true, errorMessage: nextProps.userLoginError };
    }
    if (nextProps.isAuthenticated === true) {
      console.log(nextProps.history);
      nextProps.history.push("/");
      // nextProps.history.goBack();
    }
    return null;
  }

  componentDidUpdate(nextProps, prevState) {
    if (this.state.error === true) {
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" }, state => {
          nextProps.dispatch({ type: USER_LOGIN_ERROR, payload: "" });
        });
      }, 3000);
    }
  }

  onSubmit() {
    if (this.validate()) {
      const data = {
        grant_type: "password",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        username: this.state.email,
        password: this.state.password
      };
      this.props.dispatch(loginUser(data));
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
const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.user.isFetching,
  userLoginError: state.user.userLoginError
});

export default connect(mapStateToProps)(Login);
