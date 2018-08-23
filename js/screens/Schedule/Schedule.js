import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Schedule = props => {
  console.log(props.sessions);
  const iconName = Platform.select({
    ios: `ios-heart`,
    android: `md-heart`
  });
  return (
    <ScrollView>
      {props.sessions.map(session => (
        <Fragment key={session.title}>
          <Text>{session.title}</Text>
          <Ionicons name={iconName} size={15} />
        </Fragment>
      ))}
    </ScrollView>
  );
};

export default Schedule;
