import { createStackNavigator } from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";

export default createStackNavigator({
  about: {
    screen: About
  },
  Map: {
    screen: Map
  }
});
