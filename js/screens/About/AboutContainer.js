import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import About from "./About";
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

export default class AboutContainer extends Component {
  static navigationOptions = { title: "About" };
  render() {
    return (
      <Query query={GET_ALL_CONDUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `Error!: ${error}`;

          return <About conducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}
