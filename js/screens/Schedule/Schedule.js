import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SessionList } from "../../components/SessionList";

const Schedule = props => {
  return <SessionList data={props.sessions} />;
};

export default Schedule;
