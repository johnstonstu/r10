import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./About";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import client from "../../config/api";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import formatData from "../../lib/dataFormatHelper";

const GET_ALL_CONDUCTS = gql`
  {
    allConducts {
      title
      description
    }
  }
`;

export default class AboutContainer extends Component {
  static navigationOptions = { title: "About" };
  render() {
    return (
      <Query query={GET_ALL_CONDUCTS}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          return <About conducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}
