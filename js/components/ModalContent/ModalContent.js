import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  Modal,
  TouchableHighlight,
  Linking,
  ScrollView
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import GradientButton from '../GradientButton'
import PropTypes from 'prop-types';

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
              <GradientButton text={"Read more on Wiki"} action={() => {
                  Linking.openURL(props.data.speaker.url);
                }} />
              </ScrollView>
            </View>
          </View>
        </Modal>
    )
}

ModalContent.propTypes = {
  data: PropTypes.object.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}