import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import MainFooter from "../components/footer";
import { getLoginUser } from "../actions/userActions";
class PageNotFound extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.dispatch(getLoginUser(this.props.history));
    }
  }
  render() {
    return (
      <div id="body" className="hold-transition skin-green sidebar-mini">
        <div className="wrapper">
          <Header history={this.props.history} />
          <SideBar />
          <div
            className="content-wrapper"
            style={{ minHeight: window.innerHeight }}
          >
            <section className="content-header">
              <h1>404 Error Page</h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-dashboard" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Examples</a>
                </li>
                <li className="active">404 error</li>
              </ol>
            </section>

            <section className="content">
              <div className="error-page">
                <h2 className="headline text-yellow"> 404</h2>

                <div className="error-content" style={{ fontSize : '20px'}}>
                  <h3>
                    <i className="fa fa-warning text-yellow" /> Oops! Page not
                    found.
                  </h3>

                  <p>
                    We could not find the page you were looking for. Meanwhile,
                    you may <Link to="/">Home</Link> or try using the search
                    form.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <MainFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.shop.isFetching
});

export default connect(mapStateToProps)(PageNotFound);
