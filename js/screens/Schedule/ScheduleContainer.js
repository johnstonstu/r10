import React, { Component } from "react";
import { Text, View } from "react-native";
import Schedule from "./Schedule.js";

export default class ScheduleContainer extends Component {
  static navigationOptions = { title: "Schedule" };
  render() {
    return <Schedule />;
  }
}
