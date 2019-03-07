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
          title="The Coffee Corner"
          subtitle="River Avenue, Aluthgama"
        /> */}
          <CardMedia
            overlay={
              <CardTitle
                title={item.shop.name}
                subtitle="River Avenue, Aluthgama"
              />
            }
          >
            <img src={item.food_photos[0].image_path} alt="" />
          </CardMedia>

          <CardText>{item.description}</CardText>
          <CardHeader
            // style={{ textAlign: "left" }}
            title={item.shop.name}
            subtitle={moment(item.shop.created_at).format("Do MMM YYYY")}
            avatar={item.shop.shop_photos[0].image_path}
          />
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
