import React, { Component } from "react";
import { Text, View } from "react-native";
import Schedule from "./Schedule.js";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SCHEDULE = gql`
  {
    allSessions {
      title
      description
      startTime
    }
  }
`;

export default class ScheduleContainer extends Component {
  static navigationOptions = { title: "Schedule" };
  render() {
    return (
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          return <Schedule sessions={data.allSessions} />;
        }}
      </Query>
    );
  }
}
