import React, { Component } from "react";
import { connect } from "react-redux";
import UserPanel from "./UserPanel";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";
class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
       
          {/* user panel (optional)  */}
          {/* <UserPanel user={this.props.user} /> */}
          
          {/* search form (Optional) */}
          {/* <SearchBar /> */}
        
          {/* <!-- Sidebar Menu --> */}
          <SideMenu user={this.props.user} />
          
        </section>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(SideBar);
