import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, Platform } from "react-native";
import { SessionList } from "../../components/SessionList";

const Schedule = props => {
  return <SessionList data={props.sessions} nav={props.nav} />;
};

export default Schedule;
