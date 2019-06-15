import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { placeOrder } from "../../actions/foodActions";

const handleOrder = (item, dispatch) => {
  let data = {
    id: item.id,
    name: item.name,
    image_path: item.food_photos[0].image_thumb,
    price: item.price
  };
  dispatch(placeOrder(data));
};

const Cards = props => {
  return props.foods.map((item, index) => {
    let imagePath = item.food_photos[0].image_path.substr(22)
    return (
      <div className="grid-item" key={index}>
        <Card>
          <CardTitle
          title={item.shop.name}
          subtitle={item.shop.shop_address.street_one +', ' + item.shop.shop_address.city}
        />
          <CardMedia
            overlay={
              <CardTitle
                title={item.name}
                subtitle={item.shop.name + ", " + item.shop.shop_address.city}
              />
            }
          >
            <img src={process.env.IMAGE_PATH + imagePath } alt="" />
          </CardMedia>

          <CardText>{item.description.substr(0, 200)}....</CardText>
          <CardText style={{ fontSize: "20px" }}>Rs {item.price}</CardText>
          {/* <CardHeader
            // style={{ textAlign: "left" }}
            title={item.shop.name}
            subtitle={moment(item.shop.created_at).format("Do MMM YYYY")}
            avatar={item.shop.shop_photos[0].image_path}
          /> */}
          <CardActions>
            {/* <FlatButton label="View" /> */}
            <FlatButton
              onClick={() => {
                handleOrder(item, props.dispatch);
              }}
              label="Place Order"
            />
          </CardActions>
        </Card>
      </div>
    );
  });
};
export default Cards;
