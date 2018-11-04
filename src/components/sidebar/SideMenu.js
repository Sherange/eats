import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideMenu extends Component {
  render() {
    return (
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">PAGES</li>

        <li>
          <Link to="/">
            <i className="fa fa-link" />
            Home
          </Link>
        </li>

        <li className="header">FOOD CATEGORIES</li>

        <li>
          <Link to="/lunch">
            <i className="fa fa-link" />
            Lunch
          </Link>
        </li>

        <li>
          <Link to="/breakfast">
            <i className="fa fa-link" />
            Breakfast
          </Link>
        </li>

        <li>
          <Link to="/dinner">
            <i className="fa fa-link" />
            Dinner
          </Link>
        </li>

        <li>
          <Link to="/drinks">
            <i className="fa fa-link" />
            Drinks
          </Link>
        </li>

        <li>
          <Link to="/desserts">
            <i className="fa fa-link" />
            Desserts
          </Link>
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

        <li className="header">USER</li>

        <li>
          <Link to="/profile">
            <i className="fa fa-link" />
            Profile
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <i className="fa fa-link" />
            Orders
          </Link>
        </li>

        <li>
          <Link to="/myshops">
            <i className="fa fa-link" />
            My shops
          </Link>
        </li>
      </ul>
    );
  }
}
