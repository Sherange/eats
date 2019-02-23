import React, { Component } from "react";
import { TextField, SelectField, MenuItem, RaisedButton } from "material-ui";
import { FOOD_TYPE, FOOD_CATERGORY } from "../../constant/constant";
import { addFoodItem } from "../../actions/foodActions";
import {
  ADD_FOOD_ITEMS_ERROR,
  ADD_FOOD_ITEMS_SUCCESS
} from "../../actions/types";
import moment from "moment";
import ImageUploader from "react-images-upload";

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
                props.selectedShop && props.selectedShop.shop_photos.length > 0
                  ? props.selectedShop.shop_photos[0].image_path
                  : "/images/profile.png"
              }
              className="shop-info-img"
            />
            <div className="shop-info">
              <p className="shop-info-name">
                {props.selectedShop && props.selectedShop.name}
              </p>
              <p className="shop-info-subtitle">
                <span className="dot" />
                {props.selectedShop && props.selectedShop.shop_address.address}
              </p>
              <p className="shop-info-subtitle">
                {props.selectedShop &&
                  props.selectedShop.shop_address.street_one}
              </p>
              <p className="shop-info-subtitle">
                {props.selectedShop && props.selectedShop.shop_address.city}
              </p>
              <p className="shop-info-subtitle">
                <i className="fa fa-phone-square" />{" "}
                {props.selectedShop && props.selectedShop.phone_number}
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

      errorName: "",
      errorType: "",
      errorCategory: "",
      errorPrice: "",
      errorDescription: "",

      error: false,
      errorMessage: "",
      success: false,
      successMessage: "",

      pictures: []
    };
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidUpdate() {
    if (this.state.error === true) {
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" }, state => {
          this.props.dispatch({ type: ADD_FOOD_ITEMS_ERROR, payload: "" });
        });
      }, 2000);
    }

    if (this.state.success === true) {
      setTimeout(() => {
        this.setState({ success: false, successMessage: "" }, state => {
          this.props.dispatch({ type: ADD_FOOD_ITEMS_SUCCESS, payload: "" });
          this.props.history.goBack();
        });
      }, 2000);
    }

    if (this.props.addFoodItemsError && this.state.error === false) {
      this.setState({
        error: true,
        errorMessage: this.props.addFoodItemsError
      });
    }

    if (this.props.addFoodItemsSuccess && this.state.success === false) {
      this.setState({
        success: true,
        successMessage: this.props.addFoodItemsSuccess
      });
    }
  }

  onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
	}

  validate() {
    if (this.state.name === "") {
      this.setState({ errorName: "Meal name required" });
      return false;
    } else if (this.state.type === "") {
      this.setState({ errorType: "Meal type required" });
      return false;
    } else if (this.state.category === "") {
      this.setState({ errorCategory: "Meal category required" });
      return false;
    } else if (this.state.price === "") {
      this.setState({ errorPrice: "Meal price required" });
      return false;
    } else if (this.state.description === "") {
      this.setState({ errorDescription: "Meal description required" });
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.validate() === true) {
      const data = {
        name: this.state.name,
        category: this.state.categoryIndex,
        type: this.state.typeIndex,
        price: this.state.price,
        description: this.state.description,
        shop_id: this.props.selectedShop.id
      };
      this.props.dispatch(addFoodItem(data));
    }
  }

  handleChangeFoodType = (event, index, value) => {
    this.setState({
      type: value,
      typeIndex: index,
      errorType: ""
    });
  };

  handleChangeCategory = (event, index, value) => {
    this.setState({
      category: value,
      categoryIndex: index,
      errorCategory: ""
    });
  };

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
              floatingLabelText="Meal Name"
              errorText={this.state.errorName}
            />
          </div>
          <div className="form-filed">
            <SelectField
              value={this.state.type}
              onChange={this.handleChangeFoodType}
              floatingLabelText="Meal Type"
              style={{ width: "90%" }}
              errorText={this.state.errorType}
            >
              {foodType}
            </SelectField>
          </div>
          <div className="form-filed">
            <SelectField
              value={this.state.category}
              onChange={this.handleChangeCategory}
              floatingLabelText="Meal Catergory"
              style={{ width: "90%" }}
              errorText={this.state.errorCategory}
            >
              {foodCatergory}
            </SelectField>
          </div>
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  price: e.target.value,
                  errorPrice: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.price}
              type="text"
              hintText=""
              floatingLabelText="Price"
              errorText={this.state.errorPrice}
            />
          </div>
          <div className="form-filed">
            <TextField
              onChange={e =>
                this.setState({
                  description: e.target.value,
                  errorDescription: ""
                })
              }
              style={{ width: "90%" }}
              value={this.state.description}
              type="text"
              hintText=""
              floatingLabelText="Description"
              errorText={this.state.errorDescription}
            />
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
            Add new meal to your shop{" "}
            {this.props.selectedShop && this.props.selectedShop.name}
          </h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Meal Information</h3>
                </div>
                {this._renderForm()}
                <div className="box-footer">
                
                  <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={this.onDrop}
                    withPreview={true}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                  />

                  <RaisedButton
                    label="Update"
                    primary={true}
                    onClick={() => this.onSubmit()}
                  />
                  {this.state.error && (
                    <div className="alert alert-danger alert-dismissible">
                      <p>
                        <i className="icon fa fa-warning" />{" "}
                        {this.state.errorMessage}
                      </p>
                    </div>
                  )}

                  {this.state.success && (
                    <div className="alert alert-success alert-dismissible">
                      <p>
                        <i className="icon fa fa-hand-peace-o" />{" "}
                        {this.state.successMessage}
                      </p>
                    </div>
                  )}
                </div>
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
