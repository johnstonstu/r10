import React from "react";
import {
  ScrollView,
  SectionList,
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types';
import styles from './styles'

const heartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

export const SessionList = ({ data, nav, favesIds }) => {  
  return (
    <ScrollView style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            console.log(item)
            if(item.description){
              return nav(item.id)
            }
            }}>
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
          </TouchableOpacity>
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

SessionList.propTypes = {
  data: PropTypes.array.isRequired,
  faveIds: PropTypes.array,
  nav: PropTypes.func.isRequired,
}

