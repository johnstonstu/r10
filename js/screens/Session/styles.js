import { StyleSheet, Dimensions } from "react-native";

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
    fontSize: 14
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
    marginVertical: 16,
    fontWeight: "bold"
  },
  time: {
    fontSize: 16,
    color: "#cf392a",
    marginBottom: 10
  },
  description: {
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
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
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
    alignSelf: "center"
  },
  modal:{
    flex: 1
  },
  modalContainer: {
    backgroundColor: "black",
    flex: 1
  },
  modalHeader: {
    flexDirection: "row",
    paddingVertical: 20
  },
  modalContent: {
    backgroundColor: "white",
    marginTop: 25,
    marginHorizontal: 15,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginBottom: 0,
    flex: 1,
    height: '100%'
  },
  modalClose: {
    marginLeft: 15
  },
  modalTitle: {
    color: "white",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 18
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 15
  },
  modalName: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold"
  },
  modalBio: {
    fontSize: 16,
    textAlign: "left",
    marginHorizontal: 15,
    marginVertical: 10
  }
});

export default styles;
