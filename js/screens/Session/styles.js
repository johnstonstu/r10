import { StyleSheet, Dimensions } from "react-native";
import {mainFont} from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 15,
    flex: 1
  },
  locationHeart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  location: {
    fontSize: 14,
    color: '#999999',
    fontFamily: mainFont,
  },
  title: {
    fontSize: 24,
    fontFamily: mainFont,
    marginVertical: 16,
    fontWeight: "bold"
  },
  time: {
    fontFamily: mainFont,
    fontSize: 16,
    color: "#cf392a",
    marginBottom: 10
  },
  description: {
    fontFamily: mainFont,
    fontSize: 16,
    marginBottom: 15
  },
  speakerInfo: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingBottom: 15
  },
  speakerName: {
    fontFamily: mainFont,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  }
});

export default styles;
