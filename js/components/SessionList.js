import React from "react";
import {
  ScrollView,
  SectionList,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import Moment from "moment";

export const SessionList = ({ data, nav }) => {
  console.log(data);
  return (
    <ScrollView>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => nav(item.id)}>
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.location}</Text>
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