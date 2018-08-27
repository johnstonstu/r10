import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text
} from "react-native";
import { Header } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  ...Platform.select({
    ios: {},
    android: {
      headerLeft: (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name={"md-menu"} size={30} color={"#ffffff"} />
        </TouchableOpacity>
      )
    }
  }),
  header: props => <GradientHeader {...props} />,
  headerStyle: { backgroundColor: "transparent" }
});
