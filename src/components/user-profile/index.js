import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import { getLoginUser } from "../../actions/userActions";

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
        <Profile
          dispatch={this.props.dispatch}
          history={this.props.history}
          user={this.props.user}
        />
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
