import React, { Component } from "react";
import { Text, View, Image } from "react-native";

// api call is section list in scroll view

const About = () => {
  return (
    <View>
      <Image source={require("../../assets/images/r10_logo.png")} />
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text>Date & Venue</Text>
      <Text>
        The R10 conferene will take place on Tuesday, June 27 in Vancouver, BC.
      </Text>
      <Text>Code of Conduct</Text>
    </View>
  );
};

export default About;
