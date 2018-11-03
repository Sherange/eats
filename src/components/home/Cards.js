import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class Cards extends Component {
  render() {
    let rows = [];

    for (let index = 0; index < 64; index++) {
      rows.push(
        <div className="grid-item">
          <Card>
            {/* <CardTitle
              title="The Coffee Corner"
              subtitle="River Avenue, Aluthgama"
            /> */}
            <CardMedia
              overlay={
                <CardTitle
                  title="The Coffee Corner"
                  subtitle="River Avenue, Aluthgama"
                />
              }
            >
              <img
                src="https://d3dz4rogqkqh6r.cloudfront.net/uploads/files/2018/10/yimg_W6jPi8-640x427.jpg"
                alt=""
              />
            </CardMedia>

            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </CardText>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="/images/profile.png"
            />
            <CardActions>
              <FlatButton label="View" />
              <FlatButton label="Place Order" />
            </CardActions>
          </Card>
        </div>
      );
    }
    return rows;
  }
}

export default Cards;
