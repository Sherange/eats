import React, { Component } from "react";
import { connect } from "react-redux";
import NumericInput from "react-numeric-input";
import { RaisedButton } from "material-ui";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { submitOrder } from "../../actions/foodActions";
import { CLEAR_ORDERS, ORDER_PLACED_SUCCESS } from "../../actions/types";
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      totalPrice: 0,
      tableID: 1,
      success: false,
      successMessage: ""
    };
  }

  onSubmit = () => {
    let foodItems = this.state.orders.map(item => {
      return item.id;
    });
    let data = {
      amount: this.state.totalPrice,
      table_id: this.state.tableID,
      food_items: foodItems
    };
    this.props.dispatch(submitOrder(data));
  };

  componentDidMount() {
    if (this.props.orders) {
      let total = this.props.orders.reduce((count, item) => {
        return count + item.price;
      }, 0);
      this.setState({ orders: this.props.orders, totalPrice: total });
    }
  }

  handleRemove(item) {
    const { orders } = this.state;
    if (orders && orders.length > 0) {
      let index = orders.indexOf(item);

      orders.splice(index);

      let total = orders.reduce((count, item) => {
        return count + item.price;
      }, 0);

      this.setState({ orders, totalPrice: total });
    }
  }

  componentDidUpdate(prevPorps) {
    if (this.state.success === true) {
      setTimeout(() => {
        this.setState(
          { success: false, successMessage: "", totalPrice: 0 },
          state => {
            this.props.dispatch({ type: CLEAR_ORDERS });
            this.props.dispatch({ type: ORDER_PLACED_SUCCESS, payload: "" });
          }
        );
      }, 4000);
    }

    if (this.props.orders != prevPorps.orders) {
      this.setState({
        orders: this.props.orders
      });
    }

    if (this.props.orderPlacedSuccess && this.state.success === false) {
      this.setState({
        success: true,
        successMessage: this.props.orderPlacedSuccess
      });
    }
  }

  renderRow() {
    return this.state.orders.map((item, key) => {
      return (
        <TableRow key={key}>
          <TableRowColumn>
            <img
              src={item.image_path ? item.image_path : "/images/profile.png"}
              className="img-order"
            />
          </TableRowColumn>
          <TableRowColumn>{item.name}</TableRowColumn>
          <TableRowColumn>{item.price}</TableRowColumn>
          <TableRowColumn>
            <button onClick={() => this.handleRemove(item)}>Remove</button>
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Order Summery</h3>
        </div>
        <div className="box-body">
          <table className="top-table">
            <thead>
              <tr>
                <th className="top-th">
                  <p className="order-title-th">
                    <small>Total Price </small>
                  </p>
                </th>
                <th className="top-th">
                  <p className="order-title-th">
                    <small>Your Table ID</small>
                  </p>
                </th>
                <th className="top-th">
                  <p className="order-title-th">
                    <small>No of Items</small>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="top-td">
                  <p className="order-title">Rs: {this.state.totalPrice}/=</p>
                </td>
                <td className="top-td">
                  <NumericInput
                    style={{
                      input: {
                        width: "50px"
                      }
                    }}
                    onChange={value => this.setState({ tableID: value })}
                    min={1}
                    max={10}
                    value={this.state.tableID}
                  />
                </td>
                <td className="top-td">
                  <p className="order-title">
                    {this.state.orders ? this.state.orders.length : 0}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          {this.state.orders && this.state.orders.length > 0 ? (
            <Table multiSelectable={false}>
              <TableHeader displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>FOOD ITEM</TableHeaderColumn>
                  <TableHeaderColumn>FOOD NAME</TableHeaderColumn>
                  <TableHeaderColumn>PRICE</TableHeaderColumn>
                  <TableHeaderColumn />
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {this.renderRow()}
              </TableBody>
            </Table>
          ) : (
            <div>No Orders - Place your order now</div>
          )}

          {this.state.orders && this.state.orders.length > 0 && (
            <>
              <hr />
              <RaisedButton
                label="Submit Order"
                primary={true}
                onClick={() => this.onSubmit()}
              />
            </>
          )}

          {this.state.success && (
            <div className="alert alert-success alert-dismissible">
              <p style={{ fontSize : 18}}>
                <i className="icon fa fa-hand-peace-o" />
                {this.state.successMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching,
  orders: state.foodItem.orders,
  orderPlacedSuccess: state.foodItem.orderPlacedSuccess
});

export default connect(mapStateToProps)(Orders);
