import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Linking,
  Platform,
  StyleSheet,
  ScrollView
} from "react-native";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import ModalContent from "../../components/ModalContent";

const heartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

export default class SessionSingle extends Component {
  state = { modalVisible: false };
  toggleModal = () => {
    this.setState(PrevState => ({ modalVisible: !PrevState.modalVisible }));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.locationHeart}>
          <Text style={styles.location}>{this.props.data.location}</Text>
          {this.props.favesIds.includes(this.props.data.id) && (
            <Ionicons name={heartIcon} size={18} color={"#cf392a"} />
          )}
        </View>
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.time}>
          {Moment(this.props.data.startTime).format("h:mm A")}
        </Text>
        <Text style={styles.description}>{this.props.data.description}</Text>
        <Text>Presented by:</Text>
        <TouchableOpacity
          style={styles.speakerInfo}
          onPress={
            this.toggleModal
          }
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: this.props.data.speaker.image }}
          />
          <Text style={styles.speakerName}>{this.props.data.speaker.name}</Text>
        </TouchableOpacity>

        {this.props.favesIds.includes(this.props.data.id) ? (
          <TouchableOpacity
            onPress={() => this.props.removeFave(this.props.data.id)}
          >
            <LinearGradient
              style={styles.button}
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
            >
              <Text style={styles.buttonText}>Remove from Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => this.props.addFave(this.props.data.id)}
          >
            <LinearGradient
              style={styles.button}
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
            >
              <Text style={styles.buttonText}>Add to Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        <ModalContent data={this.props.data} modalVisible={this.state.modalVisible} closeModal={this.toggleModal}/>
      </View>
    );
  }
}
