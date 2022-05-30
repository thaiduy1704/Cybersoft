import React, { Component } from "react";

export default class model extends Component {
  render() {
    let { glasses } = this.props;

    return (
      <div className="model container d-flex justify-content-around mb-5">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/model.jpg"}
            alt="model base"
            className="img-fluid rounded"
          />
        </div>
        <div className="model__target">
          <img
            src={process.env.PUBLIC_URL + "/images/model.jpg"}
            alt="model"
            className="img-fluid rounded"
          />
          <div className="model__glasses">
            <img src={process.env.PUBLIC_URL + glasses} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
