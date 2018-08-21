import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./About";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import client from "../../config/api";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class AboutContainer extends Component {
  componentDidMount() {
    client
      .query({
        query: gql`
          {
            allConducts {
              title
              description
            }
          }
        `
      })
      .then(result => console.log(result));
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <About />
      </ApolloProvider>
    );
  }
}
