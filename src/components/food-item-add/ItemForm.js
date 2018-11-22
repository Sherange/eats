import React, { Component } from "react";
import { TextField, SelectField, RaisedButton, MenuItem } from "material-ui";
import { FOOD_TYPE, FOOD_CATERGORY } from "../../constant/constant";
import moment from "moment";
import { compose } from "../../../../../Library/Caches/typescript/3.1/node_modules/redux";

const UserBox = props => {
  return (
    <div className="box box-success">
      <div className="box-header with-border">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <img
              onContextMenu={e => e.preventDefault()}
              src={
                props.user.image_path
                  ? props.user.image_path
                  : "/images/profile.png"
              }
              className="user-info-img"
            />
            <div className="shop-info">
              <p className="owner-info">{props.user.name}</p>
              <p>
                Member Since -
                {moment(props.user.created_at).format("Do MMM YYYY")}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopBox = props => {
  return (
    <div className="box box-success">
      <div className="box-header with-border">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <img
              src={
                props.selectedShop.shop_photos[0].image_path
                  ? props.selectedShop.shop_photos[0].image_path
                  : "/images/profile.png"
              }
              className="shop-info-img"
            />
            <div className="shop-info">
              <p className="shop-info-name">{props.selectedShop.name}</p>
              <p className="shop-info-subtitle">
                <span class="dot" />
                {props.selectedShop.shop_address.address}
              </p>
              <p className="shop-info-subtitle">
                {props.selectedShop.shop_address.street_one}
              </p>
              <p className="shop-info-subtitle">
                {props.selectedShop.shop_address.city}
              </p>
              <p className="shop-info-subtitle">
                <i className="fa fa-phone-square" />{" "}
                {props.selectedShop.phone_number}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      categoryIndex: "",
      type: "",
      typeIndex: "",
      price: "",
      description: "",

      errorName: ""
    };
  }

  _renderForm() {
    const foodType = FOOD_TYPE.map(item => {
      return (
        <MenuItem key={item.key} value={item.value} primaryText={item.value} />
      );
    });

    const foodCatergory = FOOD_CATERGORY.map(item => {
      return (
        <MenuItem key={item.key} value={item.value} primaryText={item.value} />
      );
    });

    return (
      <form
        method="POST"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="box-body">
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  name: e.target.value,
                  errorName: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.name}
              type="text"
              hintText=""
              floatingLabelText="Food Court Name"
              errorText={this.state.errorName}
            />
          </div>
          <div className="form-filed">
            <SelectField
              value={this.state.type}
              // onChange={this.handleChangeCuisinesAvailable}
              floatingLabelText="Meal Type"
              style={{ width: "90%" }}
              errorText={this.state.errorCuisines}
            >
              {foodType}
            </SelectField>
          </div>
          <div className="form-filed">
            <SelectField
              value={this.state.category}
              // onChange={this.handleChangeOpeningHours}
              floatingLabelText="Meal Catergory"
              style={{ width: "90%" }}
              errorText={this.state.errorOpeningHours}
            >
              {foodCatergory}
            </SelectField>
          </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <>
        <section className="content-header">
          <h1>
            List your shops here
            <small>start earning</small>
          </h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Food Item Information</h3>
                </div>
                {this._renderForm()}
              </div>
            </div>
            <div className="col-md-4">
              <UserBox user={this.props.user}> </UserBox>
              <ShopBox selectedShop={this.props.selectedShop} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ItemForm;
