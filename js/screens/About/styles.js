import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 12
  },
  header: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    marginVertical: 16
  },
  image: {
    marginVertical: 12,
    alignSelf: "center"
  },
  content: {
    marginVertical: 8,
    paddingVertical: 12,
    borderColor: "#e6e6e6",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  titleContainer: {
    flexDirection: "row",
    paddingRight: 12
  },
  title: {
    color: "#9963EA",
    fontFamily: "Montserrat-Regular",
    marginBottom: 16
  },
  text: {
    fontFamily: "Montserrat-Light"
  },
  copyright: {
    marginVertical: 10
  }
});

export default styles;
