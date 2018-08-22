import React, { Component } from "react";
import { Text, View } from "react-native";
import Schedule from "./Schedule.js";
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
    return <Schedule />;
  }
}
