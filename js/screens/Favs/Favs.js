import React, { Component } from "react";
import { Text, View } from "react-native";
import { SessionList } from "../../components/SessionList";

const Favs = props => {
  return (
    <SessionList
      data={props.sessions}
      nav={props.nav}
      favesIds={props.favesIds}
    />
  );
};

export default Favs;
