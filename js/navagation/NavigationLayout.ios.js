import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import React from "react";
import About from "../screens/About";
import Map from "../screens/Map";
import Favs from "../screens/Favs";
import Schedule from "../screens/Schedule";
import Session from "../screens/Session";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import {mainFont} from '../config/styles'

const stackAbout = createStackNavigator(
  {
    About: {
      screen: About
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const stackMap = createStackNavigator(
  {
    Map: {
      screen: Map
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const stackFavs = createStackNavigator(
  {
    Favs: {
      screen: Favs
    },
    Session: {
      screen: Session
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const stackSchedule = createStackNavigator(
  {
    Schedule: {
      screen: Schedule
    },
    Session: {
      screen: Session
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

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
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 10,
        fontFamily: mainFont,
      },
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
