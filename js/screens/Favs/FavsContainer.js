import React, { Component } from "react";
import { Text, View } from "react-native";
import Favs from "./Favs.js";
import FavesContext from "../../context/FavesContext";
import SESSION_QUERY from "../Session/SessionContainer";

export default class FavsContainer extends Component {
  static navigationOptions = { title: "Favs" };

  sessionNav = id => {
    this.props.navigation.navigate("Session", {
      id: id
    });
  };

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
