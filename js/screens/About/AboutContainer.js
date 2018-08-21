import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./About";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import client from "../../config/api";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_ALL_CONDUCTS = gql`
  {
    allConducts {
      title
      description
    }
  }
`;

const Conducts = () => (
  <Query query={GET_ALL_CONDUCTS}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return <View>{data}</View>;
    }}
  </Query>
);

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
