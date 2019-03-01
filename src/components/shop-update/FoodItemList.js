import React, { Component } from "react";
import { FlatButton } from "material-ui";

export default class FoodItemList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="box box-primary">
            <img
              src={"/images/placeholder.png"}
              className="shop-list-image"
              alt="food-itemimage"
            />
            <div className="food-item-title">
              <p className="card-title">Food Name</p>
            </div>
            <div className="food-item-title">
              <p className="card-title">Food Type</p>
            </div>
            <div className="food-item-title">
              <p className="card-title">Rs 4000</p>
            </div>
            <div className="food-item-button">
              <FlatButton label="Update" primary={true} />
              <FlatButton label="Delete" secondary={true} />
              <FlatButton label="Unlist" disabled={false} />
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}
