import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import React from "react";
import About from "../screens/About";
import Map from "../screens/Map";
import Favs from "../screens/Favs";
import Schedule from "../screens/Schedule";
import Ionicons from "react-native-vector-icons/Ionicons";

const stackAbout = createStackNavigator({
  About: {
    screen: About
  }
});

const stackMap = createStackNavigator({
  Map: {
    screen: Map
  }
});

const stackFavs = createStackNavigator({
  Favs: {
    screen: Favs
  }
});

const stackSchedule = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
});

export default createBottomTabNavigator(
  {
    Schedule: stackSchedule,
    Map: stackMap,
    Favs: stackFavs,
    About: stackAbout
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Schedule":
            iconName = `ios-calendar`;
            break;
          case "Map":
            iconName = `ios-map`;
            break;
          case "Favs":
            iconName = `ios-heart`;
            break;
          case "About":
            iconName = `ios-information-circle`;
            break;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      labelStyle: 10,
      style: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: {
          height: -2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2
      }
    }
  }
);
