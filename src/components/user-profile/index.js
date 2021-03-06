import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileSummary from "./ProfileSummary";
import ProfileForm from "./ProfileForm";
import { getLoginUser } from "../../actions/userActions";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(getLoginUser());
  }
  render() {
    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="container-fluid">
          <div className="user-profile-wrapper">
            <ProfileSummary
              isFetching={this.props.isFetching}
              dispatch={this.props.dispatch}
              history={this.props.history}
              user={this.props.user}
              userUpdateError={this.props.userUpdateError}
              userUpdateSuccess={this.props.userUpdateSuccess}
            />
            <ProfileForm
              dispatch={this.props.dispatch}
              history={this.props.history}
              user={this.props.user}
              userUpdateError={this.props.userUpdateError}
              userUpdateSuccess={this.props.userUpdateSuccess}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,
  userUpdateSuccess: state.user.userUpdateSuccess,
  userUpdateError: state.user.userUpdateError
});

export default connect(mapStateToProps)(UserProfile);
