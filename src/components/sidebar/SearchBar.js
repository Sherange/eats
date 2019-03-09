import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <form className="sidebar-form">
        <div className="input-group">
          <input
            type="text"
            name="filters"
            className="form-control"
            placeholder="Search..."
          />
          <span className="input-group-btn">
            <button
              // type="submit"
              name="search"
              // id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
    );
  }
}
