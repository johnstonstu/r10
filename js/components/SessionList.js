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
    <ScrollView>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => nav(item.id)}>
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.location}</Text>
              {favesIds.includes(item.id) && (
                <Ionicons name={heartIcon} size={18} color={"red"} />
              )}
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
  time: {
    backgroundColor: "grey",
    fontSize: 16
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  }
});
