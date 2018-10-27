import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">HEADER</li>

        <li className="active">
          <a href="#">
            <i className="fa fa-link" /> <span>Link</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa fa-link" /> <span>Another Link</span>
          </a>
        </li>

        <li className="treeview">
          <a href="#">
            <i className="fa fa-link" /> <span>Multilevel</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li>
              <a href="#">Link in level 2</a>
            </li>
            <li>
              <a href="#">Link in level 2</a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
