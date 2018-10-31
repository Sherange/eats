import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">FOOD CATEGORIES</li>

        <li>
          <a href="/lunch">
            <i className="fa fa-link" /> <span>Lunch</span>
          </a>
        </li>

        <li>
          <a href="/breakfast">
            <i className="fa fa-link" /> <span>Breakfast</span>
          </a>
        </li>

        <li>
          <a href="/dinner">
            <i className="fa fa-link" /> <span>Dinner</span>
          </a>
        </li>

        <li>
          <a href="/drinks">
            <i className="fa fa-link" /> <span>Drinks</span>
          </a>
        </li>

        <li>
          <a href="/desserts">
            <i className="fa fa-link" /> <span>Desserts & Bakes</span>
          </a>
        </li>

        {/* <li className="treeview">
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
        </li> */}

        <li className="header">USER </li>

        <li className="">
          <a href="/profile/id">
            <i className="fa fa-link" /> <span>Profile</span>
          </a>
        </li>

        <li className="">
          <a href="/orders/id">
            <i className="fa fa-link" /> <span>My Orders</span>
          </a>
        </li>

        <li className="">
          <a href="/myshops/id">
            <i className="fa fa-link" /> <span>My Shops</span>
          </a>
        </li>
      </ul>
    );
  }
}
