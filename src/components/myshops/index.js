import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class MyShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cuisinesAvailable: "",
      openingHours : ""
    };
  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Add New Shop
            <small>Preview</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#">Forms</a>
            </li>
            <li className="active">General Elements</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Quick Example</h3>
                </div>
                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <TextField
                        onChange={e => this.setState({ name: e.target.value })}
                        value={this.state.name}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Enter your shop name"
                        // errorText="This field is required"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        onChange={e =>
                          this.setState({ cuisinesAvailable: e.target.value })
                        }
                        value={this.state.cuisinesAvailable}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Cuisines Available"
                        // errorText="This field is required"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        onChange={e =>
                          this.setState({ openingHours: e.target.value })
                        }
                        value={this.state.openingHours}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Opening Hours"
                        // errorText="This field is required"
                      />
                    </div>
                    {/* <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Check me out
                      </label>
                    </div> */}
                  </div>

                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyShops;
