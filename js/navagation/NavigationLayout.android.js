import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import React from "react";
import About from "../screens/About";
import Map from "../screens/Map";
import Favs from "../screens/Favs";
import Schedule from "../screens/Schedule";
import Session from "../screens/Session";
import Speaker from "../screens/Speaker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import { Platform } from "react-native";

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

const stackSpeaker = createStackNavigator(
  {
    Speaker: {
      screen: Speaker
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const renderIcon = (iconName, tintColor) => {
  return <Ionicons name={iconName} size={25} color={tintColor} />;
};

stackAbout.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-information-circle", tintColor)
};

stackFavs.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-heart", tintColor)
};
stackMap.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-map", tintColor)
};
stackSchedule.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-calendar", tintColor)
};

export default createDrawerNavigator({
  Schedule: stackSchedule,
  Map: stackMap,
  Favs: stackFavs,
  About: stackAbout
});
