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
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
