import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileSummary from "./ProfileSummary";
import ProfileForm from "./ProfileForm";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // if (this.props.match.params && this.props.match.params.id) {
    //   this.props.dispatch(getLoginUser());
    // }
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
              dispatch={this.props.dispatch}
              history={this.props.history}
              user={this.props.user}
            />
            <ProfileForm
              dispatch={this.props.dispatch}
              history={this.props.history}
              user={this.props.user}
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
  isFetching: state.shop.isFetching
});

export default connect(mapStateToProps)(UserProfile);
