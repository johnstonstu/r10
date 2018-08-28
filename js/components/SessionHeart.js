// import React from "react";
// import { View, Text, Platform, StyleSheet } from "react-native";
// import FavesContext from "../../context/FavesContext";
// import styles from "./styles";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const heartIcon = Platform.select({
//   ios: "ios-heart",
//   android: "md-heart"
// });

// const LocationText = ({ id }) => {
//   return (
//     <FavesContext.Consumer>
//       {value => {
//         const faveList = value.faveIds.map(f => f.id);
//         return (
//           <View style={styles.container}>
//             {faveList.includes(id) && (
//               <Ionicons name={heart} size={18} color={"red"} />
//             )}
//           </View>
//         );
//       }}
//     </FavesContext.Consumer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 8
//   },
//   text: {
//     color: '#999999',
//     fontSize: 18,
//     fontFamily: Platform.select({
//       ios: 'Montserrat-light',
//       android: 'Montserrat-Regular'
//     })
//   }
