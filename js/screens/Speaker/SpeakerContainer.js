import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator, View } from "react-native";

const SPEAKER_QUERY = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      name
      image
      bio
      url
    }
  }
`;

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    return (
      <View>
        <Text>HIHI</Text>
      </View>
    );
  }
}
