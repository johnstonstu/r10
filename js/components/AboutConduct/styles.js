import { StyleSheet } from "react-native";
import { mainFont } from '../../config/styles'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    paddingRight: 12
  },
  title: {
    color: "#9963EA",
    fontFamily: mainFont,
    marginBottom: 16
  },
  bodyText: {
    fontFamily: mainFont,
    marginVertical: 5,
  }
});

export default styles;
