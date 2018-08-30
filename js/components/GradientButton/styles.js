import { StyleSheet, Dimensions } from "react-native";
import {mainFont} from '../../config/styles'

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: "blue",
    alignSelf: "center",
    borderRadius: 20,
    width: "60%",
    paddingVertical: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: mainFont,
  }
});

export default styles;
