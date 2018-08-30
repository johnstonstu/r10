import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import Schedule from "./Schedule.js";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/dataFormatHelper";
import FavesContext from "../../context/FavesContext";
import PropTypes from 'prop-types'


const GET_SCHEDULE = gql`
  {
    allSessions {
      title
      description
      id
      startTime
      location
    }
  }
`;

export default class ScheduleContainer extends Component {
  static navigationOptions = { title: "Schedule" };

  sessionNav = id => {
    this.props.navigation.navigate("Session", { id: id });
  };

  render() {
    return (
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `Error!: ${error}`;

          return (
            <FavesContext.Consumer>
              {values => {
                faveArr = [];
                values.favesIds.map(fave => faveArr.push(fave.id));
                return (
                  <Schedule
                    sessions={formatSessionData(allSessions)}
                    nav={id => this.sessionNav(id)}
                    favesIds={faveArr}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

