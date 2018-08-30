import React, { Component } from "react";
import { Text, View } from "react-native";
import SessionList from "../../components/SessionList";
import PropTypes from 'prop-types'

const Favs = props => {
  return (
    <SessionList
      data={props.sessions}
      nav={props.nav}
      favesIds={props.favesIds}
    />
  );
};

Favs.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array,
  nav: PropTypes.func.isRequired,
}

export default Favs;
