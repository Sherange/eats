import React, { Component } from "react";

class ItemForm extends Component {
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
                  <h3 className="box-title">Quick Example</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ItemForm;
