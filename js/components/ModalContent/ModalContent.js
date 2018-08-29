import React from 'react';
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
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";




export const ModalContent = props => {
    return (
            <Modal
        style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}
          onRequestClose={() => {
           props.closeModal()
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableHighlight
                style={styles.modalClose}
                onPress={() => {
           props.closeModal()
          }}
              >
                <Ionicons name={`ios-close`} size={50} color="white" />
              </TouchableHighlight>
              <Text style={styles.modalTitle}>About the speaker</Text>
            </View>
            <View style={styles.modalContent}>
              <ScrollView>
              <Image
                style={styles.modalImage}
                source={{ uri: props.data.speaker.image }}
              />
              <Text style={styles.modalName}>
                {props.data.speaker.name}
              </Text>

              <Text style={styles.modalBio}>{props.data.speaker.bio}</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(props.data.speaker.url);
                }}
              >
                <LinearGradient
                  style={styles.button}
                  colors={["#9963ea", "#8797D6"]}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 0.0 }}
                >
                  <Text style={styles.buttonText}>Read more on Wiki</Text>
                </LinearGradient>
              </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
    )
}
