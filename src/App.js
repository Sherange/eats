import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Registration from './components/register';
import HomePage from "./components/pages/HomePage";
import Layout from "./components/pages/Layout";
import PageNotFound from "./components/pages/PageNotFound";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Switch> 
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Route path="/layout" component={Layout} />
            <Route path="*" component={PageNotFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
