import React, { Component } from "react";
import { Text, View, TouchableOpacity, Animated, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

export default class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      plus: "add",
      minus: "remove"
    };
    this.state = {
      expanded: false
    };
  }

  toggle() {
    if (!this.state.height) this.state.height = new Animated.Value(0);
    let initialValue = this.state.expanded ? this.state.maxHeight : 0,
      finalValue = this.state.expanded ? 0 : this.state.maxHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.height.setValue(initialValue);
    Animated.timing(this.state.height, {
      toValue: finalValue
    }).start();
  }
  maxHeight(e) {
    if (
      this.state.maxHeight === undefined ||
      e.nativeEvent.layout.height >= this.state.maxHeight
    ) {
      this.setState({
        maxHeight: e.nativeEvent.layout.height
      });
    }
    if (!this.state.height) this.setState({ height: new Animated.Value(0) });
  }

  render() {
    let icon = (icon = this.icons["plus"]);
    if (this.state.expanded) {
      icon = this.icons["minus"];
    }
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggle()}>
          <View style={this.props.styles.titleContainer}>
            <Ionicons
              name={Platform.OS === "android" ? `md-${icon}` : `ios-${icon}`}
              style={{ paddingRight: 5 }}
              color={"#9963ea"}
              size={15}
            />
            <Text style={this.props.styles.title}>{this.props.data.title}</Text>
          </View>
        </TouchableOpacity>
        <Animated.View style={{ height: this.state.height }}>
          <View onLayout={e => this.maxHeight(e)}>
            <Text style={this.props.styles.bodyText}>
              {this.props.data.description}
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

ConductItem.propTypes = {
  styles: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};
