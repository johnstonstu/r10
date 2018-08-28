import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { SessionSingle } from "./Session";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavsContext from "../../context/FavesContext";

export const SESSION_QUERY = gql`
  query getSession($id: ID) {
    Session(id: $id) {
      id
      title
      location
      startTime
      description
      speaker {
        name
        bio
        image
        id
      }
    }
  }
`;

export default class SessionContainer extends Component {
  static navigationOptions = { title: "Session" };

  render() {
    return (
      <Query
        query={SESSION_QUERY}
        variables={{ id: this.props.navigation.getParam("id") }}
      >
        {({ data: { Session }, loading, error }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error :</Text>;
          return (
            <FavsContext.Consumer>
              {values => {
                return (
                  <SessionSingle
                    data={Session}
                    addFave={values.addFave}
                    removeFave={values.removeFave}
                    nav={this.props.navigation}
                  />
                );
              }}
            </FavsContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
