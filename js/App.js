import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./screens/About";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";
import RootStackNavigator from "./navagation/RootStackNavigator";

export default class App extends Component {
  render() {
    return <RootStackNavigator />;
  }
}
