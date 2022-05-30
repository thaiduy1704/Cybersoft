import React, { Component } from "react";

export default class glasses extends Component {
  handlingClickItem = (url) => {
    this.props.chooseGlassesHandler(url);
  };
  renderGlasses = (glasses) => {
    return glasses.map((item) => {
      return (
        <div
          className="glasses__item p-1 m-3"
          key={item.id}
          onClick={() => this.handlingClickItem(item.url)}
        >
          <img src={process.env.PUBLIC_URL + item.url} alt={item.name} />
        </div>
      );
    });
  };

  render() {
    const { glassesProp } = this.props;

    return (
      <div className="glasses container d-flex flex-wrap rounded justify-content-start align-items-center">
        {this.renderGlasses(glassesProp)}
      </div>
    );
  }
}
