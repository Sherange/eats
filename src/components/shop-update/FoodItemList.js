import React from "react";
import { FOOD_TYPE, FOOD_CATERGORY } from "../../constant/constant";
import { FlatButton } from "material-ui";

const foodType = item => {
  return FOOD_TYPE.find(type => {
    if (item == type.value) {
      return type;
    }
  });
};

const FoodItemList = props => {
  if (props.shopFoods && props.shopFoods.length > 0) {
    return props.shopFoods.map((item, index) => {
      let food_type = foodType(item.type);
      return (
        <div className="row" key={index}>
          <div className="col-md-12">
            <div className="box box-primary">
              <img
                src={item.food_photos[0].image_path}
                className="shop-list-image"
                alt="food-itemimage"
              />
              <div className="food-item-title">
                <p className="card-title">{item.name}</p>
              </div>
              <div className="food-item-title">
                <p className="card-title">{food_type.value}</p>
              </div>
              <div className="food-item-title">
                <p className="card-title">Rs {item.price}</p>
              </div>
              <div className="food-item-button">
                {/* <FlatButton label="Update" primary={true} /> */}
                <FlatButton
                  label="Delete"
                  secondary={true}
                  onClick={() => props.handleDelete(item.id)}
                  dispatch={props.dispatch}
                />
                {/* <FlatButton label="Unlist" disabled={false} /> */}
              </div>
              <div />
            </div>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="box box-primary">
            <img
              src={"/images/placeholder.png"}
              className="shop-list-image"
              alt="food-itemimage"
            />
            <div className="no-food-item-title">
              <p className="card-title">no food's list for this shop</p>
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
};
export default FoodItemList;
