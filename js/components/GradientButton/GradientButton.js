import React from 'react';
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'

export const GradientButton = props => {
    return(
        <TouchableOpacity
            onPress={props.action}
          >
            <LinearGradient
              style={styles.button}
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
            >
              <Text style={styles.buttonText}>{props.text}</Text>
            </LinearGradient>
          </TouchableOpacity>
    )
}

GradientButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}