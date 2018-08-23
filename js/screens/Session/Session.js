import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Moment from "moment";

export const SessionSingle = ({ data, addFave, removeFave }) => {
  return (
    <View>
      <Text>{data.title}</Text>
      <Text>{data.location}</Text>
      <Text>{Moment(data.startTime).format("h:mm A")}</Text>
      <Text>{data.speaker.name}</Text>
      <Button title="add to faves" onPress={() => addFave(data.id)} />
      <Button title="remove from faves" onPress={() => removeFave(data.id)} />
    </View>
  );
};
