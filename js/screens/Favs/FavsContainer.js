import React, { Component } from "react";
import { Text, View } from "react-native";
import Favs from "./Favs.js";

export default class FavsContainer extends Component {
  static navigationOptions = { title: "Favs" };
  render() {
    return <Favs />;
  }
}
