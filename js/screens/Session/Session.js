import React, { Component } from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import Moment from "moment";

export const SessionSingle = ({ data, addFave, removeFave, nav }) => {
  console.log(data);
  return (
    <View>
      <Text>{data.location}</Text>
      <Text>{data.title}</Text>
      <Text>{Moment(data.startTime).format("h:mm A")}</Text>
      <Text>{data.description}</Text>
      <Text>Presented by:</Text>
      <TouchableOpacity
        onPress={() =>
          nav.navigate("Speaker", {
            id: data.speaker.id
          })
        }
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: data.speaker.image }}
        />
        <Text>{data.speaker.name}</Text>
      </TouchableOpacity>

      <Button title="add to faves" onPress={() => addFave(data.id)} />
      <Button title="remove from faves" onPress={() => removeFave(data.id)} />
    </View>
  );
};
