import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Linking
} from "react-native";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class SessionSingle extends Component {
  state = { modalVisible: false };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View>
        <Text>{this.props.data.location}</Text>
        <Text>{this.props.data.title}</Text>
        <Text>{Moment(this.props.data.startTime).format("h:mm A")}</Text>
        <Text>{this.props.data.description}</Text>
        <Text>Presented by:</Text>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: this.props.data.speaker.image }}
          />
          <Text>{this.props.data.speaker.name}</Text>
        </TouchableOpacity>

        <Button
          title="add to faves"
          onPress={() => addFave(this.props.data.id)}
        />
        <Button
          title="remove from faves"
          onPress={() => removeFave(this.props.data.id)}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={{ marginTop: 22 }}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Ionicons name={`ios-close`} size={50} />
            </TouchableHighlight>
            <Text>About the speaker</Text>
            <View>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: this.props.data.speaker.image }}
              />
              <Text>{this.props.data.speaker.bio}</Text>
              <TouchableHighlight
                onPress={() => {
                  Linking.openURL(this.props.data.speaker.url);
                }}
              >
                <Text>Read More</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
