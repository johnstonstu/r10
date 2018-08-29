import React from "react";
import {
  ScrollView,
  SectionList,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Platform
} from "react-native";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

const heartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

export const SessionList = ({ data, nav, favesIds }) => {
  return (
    <ScrollView style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => nav(item.id)}>
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.locationHeart}>
                <Text style={styles.location}>{item.location}</Text>
                {favesIds.includes(item.id) && (
                  <Ionicons
                    name={heartIcon}
                    size={18}
                    color={"red"}
                    style={styles.heart}
                  />
                )}
              </View>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{Moment(title).format("h:mm A")}</Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  time: {
    backgroundColor: "#e6e6e6",
    fontSize: 16,
    paddingLeft: 10
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10
  },
  location: {
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
