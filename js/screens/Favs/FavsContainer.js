import React, { Component } from "react";
import { Text, View } from "react-native";
import Favs from "./Favs.js";
import FavesContext from "../../context/FavesContext";

export default class FavsContainer extends Component {
  static navigationOptions = { title: "Favs" };
  render() {
    return (
      <FavesContext.Consumer>
        {values => {
          console.log(values);
          return <Favs />;
        }}
      </FavesContext.Consumer>
    );
  }
}
