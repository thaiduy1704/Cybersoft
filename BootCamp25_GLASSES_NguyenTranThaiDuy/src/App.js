import { Component } from "react";

import "./App.css";
import Header from "./components/header";
import Model from "./components/model";
import Glasses from "./components/glasses";
import data from "./data/dataGlasses.json";
const glasses = data;
export default class App extends Component {
  state = { targetGlasses: "" };
  chooseGlassesHandler = (pickedItem) => {
    this.setState({
      targetGlasses: pickedItem,
    });
  };
  render() {
    return (
      <div className="app container-fluid px-0 d-flex flex-column overlay">
        <Header />
        <div className="container mt-5 p-5">
          <Model glasses={this.state.targetGlasses} />
          <Glasses
            glassesProp={glasses}
            chooseGlassesHandler={this.chooseGlassesHandler}
          />
        </div>
      </div>
    );
  }
}
