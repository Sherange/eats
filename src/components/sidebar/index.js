import React, { Component } from "react";
import UserPanel from './UserPanel'
import SearchBar from './SearchBar'
import SideMenu from './SideMenu'


export default class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
          {/* user panel (optional)  */}
          <UserPanel></UserPanel>
          {/* search form (Optional) */}
          <SearchBar></SearchBar>
          {/* <!-- Sidebar Menu --> */}
          <SideMenu></SideMenu>
        </section>
      </aside>
    );
  }
}
