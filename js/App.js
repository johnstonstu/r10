import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./screens/About";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";
import RootStackNavigator from "./navagation/RootStackNavigator";
import { FavesProvider } from "./context/FavesContext";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
