import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Registration from "./components/register";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

import UserShops from "./pages/UserShops";
import RegisterShop from "./pages/RegisterShop";
import ShopUpdate from "./pages/ShopUpdate";
import UserProfilePage from "./pages/UserProfilePage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/user-shops" component={UserShops} />
          <Route path="/add-shop" component={RegisterShop} />
          <Route path="/update-shop/:id" component={ShopUpdate} />
          <Route path="/user-profile" component={UserProfilePage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
