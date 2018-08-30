import { StyleSheet } from 'react-native';
import {mainFont} from '../../config/styles'

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white"
    },
    time: {
        fontFamily: mainFont,
      backgroundColor: "#e6e6e6",
      fontSize: 16,
      paddingLeft: 10
    },
    title: {
        fontFamily: mainFont,
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 10
    },
    location: {
    fontFamily: mainFont,
      marginLeft: 10,
      marginBottom: 10
    },
    heart: {
      marginRight: 10
    },
    card: {
      borderBottomWidth: 1,
      borderBottomColor: "#e6e6e6"
    },
    locationHeart: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  });

  export default styles;