import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class MyShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cuisinesAvailable: "",
      openingHours: "",
      address: "",
      phoneNumber: "",
      description: "",

      error: false,
      errorMessage: "",

      errorName: "",
      errorCuisines: "",
      errorOpeningHours: "",
      errorAddress: "",
      errorPhoneNumber: "",
      errorDescription: ""
    };
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (event, index, value) =>
    this.setState({
      cuisinesAvailable: value,
      error: false,
      errorCuisines: ""
    });

  validate() {
    if (this.state.name === "") {
      this.setState({ error: true, errorName: "Shop name required" });
      return false;
    } else if (this.state.cuisinesAvailable === "") {
      this.setState({ error: true, errorCuisines: "Cuisines required" });
      return false;
    } else if (this.state.openingHours === "") {
      this.setState({
        error: true,
        errorOpeningHours: "Opening Hours required"
      });
      return false;
    } else if (this.state.phoneNumber === "") {
      this.setState({ error: true, errorPhoneNumber: "Phone number required" });
      return false;
    } else if (this.state.address === "") {
      this.setState({ error: true, errorAddress: "Address required" });
      return false;
    } else if (this.state.description === "") {
      this.setState({ error: true, errorDescription: "Description required" });
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.validate() === true) {
      console.log("here");
      // this.props.dispatch('')
    }
  }

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText="Never" />,
      <MenuItem key={2} value={2} primaryText="Every Night" />,
      <MenuItem key={3} value={3} primaryText="Weeknights" />,
      <MenuItem key={4} value={4} primaryText="Weekends" />,
      <MenuItem key={5} value={5} primaryText="Weekly" />
    ];

    return (
      <div
        className="content-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <section className="content-header">
          <h1>
            Add New Food Court
            <small>Preview</small>
          </h1>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="box box-primary">
                {/* <div className="box-header with-border">
                  <h3 className="box-title">Quick Example</h3>
                </div> */}
                <form
                  method="POST"
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                >
                  <div className="box-body">
                    <div>
                      <TextField
                        onChange={e =>
                          this.setState({
                            name: e.target.value,
                            error: false,
                            errorName: ""
                          })
                        }
                        value={this.state.name}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Food Court Name"
                        errorText={this.state.errorName}
                      />
                    </div>
                    <div>
                      <SelectField
                        value={this.state.cuisinesAvailable}
                        onChange={this.handleChange}
                        floatingLabelText="Cuisines Available"
                        autoWidth={true}
                        errorText={this.state.errorCuisines}
                      >
                        {items}
                      </SelectField>
                    </div>
                    {/* <div>
                      <TextField
                        onChange={e =>
                          this.setState({
                            cuisinesAvailable: e.target.value,
                            error: false,
                            errorCuisines: ""
                          })
                        }
                        value={this.state.cuisinesAvailable}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Cuisines Available"
                        errorText={this.state.errorCuisines}
                      />
                    </div> */}
                    <div>
                      <TextField
                        onChange={e =>
                          this.setState({
                            openingHours: e.target.value,
                            error: false,
                            errorOpeningHours: ""
                          })
                        }
                        value={this.state.openingHours}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Opening Hours"
                        errorText={this.state.errorOpeningHours}
                      />
                    </div>
                    <div>
                      <TextField
                        onChange={e =>
                          this.setState({
                            phoneNumber: e.target.value,
                            error: false,
                            errorPhoneNumber: ""
                          })
                        }
                        value={this.state.phoneNumber}
                        multiLine={true}
                        rows={1}
                        rowsMax={3}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Phone Number"
                        errorText={this.state.errorPhoneNumber}
                      />
                    </div>
                    <div>
                      <TextField
                        onChange={e =>
                          this.setState({
                            address: e.target.value,
                            error: false,
                            errorAddress: ""
                          })
                        }
                        value={this.state.address}
                        multiLine={true}
                        rows={1}
                        rowsMax={3}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Address"
                        errorText={this.state.errorAddress}
                      />
                    </div>
                    <div>
                      <TextField
                        onChange={e =>
                          this.setState({
                            description: e.target.value,
                            error: false,
                            errorDescription: ""
                          })
                        }
                        value={this.state.description}
                        multiLine={true}
                        rows={1}
                        rowsMax={3}
                        type="text"
                        style={{ width: "95%" }}
                        hintText=""
                        floatingLabelText="Description"
                        errorText={this.state.errorDescription}
                      />
                    </div>
                  </div>
                  <div className="box-footer">
                    <RaisedButton
                      label="Submit"
                      primary={true}
                      onClick={() => this.onSubmit()}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box box-info">
                <div className="box-header with-border">
                  {/* <h3 className="box-title">Quick Example</h3> */}
                  <img
                    src="/images/profile.png"
                    className="img-box"
                    alt="User Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  isFetching: state.user.isFetching
});

export default connect(mapStateToProps)(MyShops);
