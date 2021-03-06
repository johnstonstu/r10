import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import AboutConduct from "../../components/AboutConduct";
import styles from "./styles";
import PropTypes from 'prop-types';

const About = props => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scroll}>
      <Image
        source={require("../../assets/images/r10_logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.header}>Date & Venue</Text>
        <Text>
          The R10 conferene will take place on Tuesday, June 27 in Vancouver,
          BC.
        </Text>
        <Text style={styles.header}>Code of Conduct</Text>
        {props.conducts.map(conduct => (
          <AboutConduct data={conduct} key={conduct.title} />
        ))}
      </View>
      <Text style={styles.copyright}>&copy; RED Academy 2020</Text>
    </ScrollView>
    </View>
  );
};

About.propTypes = {
  conducts: PropTypes.array.isRequired
}


export default About;
