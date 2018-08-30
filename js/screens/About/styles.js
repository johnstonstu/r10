import { StyleSheet } from "react-native";
import { mainFont } from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 12
  },
  header: {
    fontSize: 20,
    fontFamily: mainFont,
    marginVertical: 16
  },
  image: {
    marginVertical: 15,
    alignSelf: "center",
  },
  content: {
    marginVertical: 8,
    paddingVertical: 12,
    borderColor: "#e6e6e6",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  text: {
    fontFamily: mainFont
  },
  copyright: {
    marginVertical: 10,
    fontFamily: mainFont
  }
});

export default styles;
