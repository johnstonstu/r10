import React, { Component } from "react";
import Map from "./Map.js";

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return <Map />;
  }
}
