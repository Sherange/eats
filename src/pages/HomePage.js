import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import MainFooter from "../components/footer";
import Home from "../components/home";
import { getLoginUser } from "../actions/userActions";
import { foods } from "../actions/foodActions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.path !== this.props.match.path) {
      let path = this.props.match.path.split("/");
      switch (path[1]) {
        case "":
          this.props.dispatch(foods());
          break;
        case "lunch":
          this.props.dispatch(foods(path[1]));
          break;
        case "breakfast":
          this.props.dispatch(foods(path[1]));
          break;
        case "dinner":
          this.props.dispatch(foods(path[1]));
          break;
        case "drinks":
          this.props.dispatch(foods(path[1]));
          break;
        case "desserts":
          this.props.dispatch(foods(path[1]));
          break;
      }
    }
  }
  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.dispatch(getLoginUser(this.props.history));
    }
    
    this.props.dispatch(foods());
  }

  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header history={this.props.history} />
          <SideBar />
          <Home dispatch={this.props.dispatch} history={this.props.history} />
          <MainFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.user.isFetching,
  foods: state.foodItem.foods
});

export default connect(mapStateToProps)(HomePage);
