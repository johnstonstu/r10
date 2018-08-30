import { StyleSheet } from 'react-native';
import { mainFont } from '../../config/styles'

const styles = StyleSheet.create({
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
      fontFamily: mainFont,
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
      fontFamily: mainFont,
      fontSize: 24,
      textAlign: "center",
      marginTop: 15,
      fontWeight: "bold"
    },
    modalBio: {
      fontFamily: mainFont,
      fontSize: 16,
      textAlign: "left",
      marginHorizontal: 15,
      marginVertical: 10
    }
  });

  export default styles