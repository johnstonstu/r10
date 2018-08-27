import React, { Component } from "react";
import { Text, View } from "react-native";
import { SessionList } from "../../components/SessionList";

const Favs = props => {
  console.log(props);
  return <SessionList data={props.sessions} nav={props.nav} />;
};

export default Favs;
