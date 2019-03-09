import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideMenu extends Component {
  render() {
    return (
      <ul className="sidebar-menu" data-widget="tree">
        {/* <li className="header">PAGES</li> */}
        
        <li className="header">FOOD CATEGORIES</li>

        <li>
          <Link to="/">
            <i className="fa fa-link" />
            <span>All</span>
          </Link>
        </li>


        <li>
          <Link to="/lunch">
            <i className="fa fa-link" />
            <span>Lunch</span>
          </Link>
        </li>

        <li>
          <Link to="/breakfast">
            <i className="fa fa-link" />
            <span>Breakfast</span>
          </Link>
        </li>

        <li>
          <Link to="/dinner">
            <i className="fa fa-link" />
            <span>Dinner</span>
          </Link>
        </li>

        <li>
          <Link to="/drinks">
            <i className="fa fa-link" />
            <span>Drinks</span>
          </Link>
        </li>

        <li>
          <Link to="/desserts">
            <i className="fa fa-link" />
            <span>Desserts</span>
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
          <Link to="/user-profile">
            <i className="fa fa-link" />
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <i className="fa fa-link" />
            <span>Orders</span>
          </Link>
        </li>

        <li>
          <Link to="/user-shops">
            <i className="fa fa-link" />
            <span>My Shops</span>
          </Link>
        </li>

          <li>
          <Link to="/add-shop">
            <i className="fa fa-link" />
            <span>Add Shop</span>
          </Link>
        </li>
      </ul>
    );
  }
}
