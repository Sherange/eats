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

const Cards = props => {
  return props.foods.map((item, index) => {
    return (
      <div className="grid-item" key={index}>
        <Card>
          {/* <CardTitle
          title={item.shop.name}
          subtitle={item.shop.shop_address.street_one +', ' + item.shop.shop_address.city}
        /> */}
          <CardMedia
            overlay={
              <CardTitle
                title={item.name}
                subtitle={item.shop.name + ", " + item.shop.shop_address.city}
              />
            }
          >
            <img src={item.food_photos[0].image_path} alt="" />
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
            <FlatButton label="View" />
            <FlatButton label="Place Order" />
          </CardActions>
        </Card>
      </div>
    );
  });
};
export default Cards;
