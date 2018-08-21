import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./screens/About";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";

const App = () => (
  <ApolloProvider client={client}>
    <AboutScreen />
  </ApolloProvider>
);

export default App;
