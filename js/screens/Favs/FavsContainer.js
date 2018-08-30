import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import Favs from "./Favs";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/dataFormatHelper";

const GET_FAVES = gql`
  {
    allSessions {
      id
      description
      location
      startTime
      title
    }
  }
`;

export default class FavsContainer extends Component {
  static navigationOptions = { title: "Favs" };

  sessionNav = id => {
    this.props.navigation.navigate("Session", {
      id: id
    });
  };

  render() {
    return (
      <Query query={GET_FAVES}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{`Error: ${error}`}</Text>;
          return (
            <FavesContext.Consumer>
              {value => {
                const favesArr = [];
                value.favesIds.map(fave => favesArr.push(fave.id));

                const faves = data.allSessions.filter(session => {
                  if (favesArr.includes(session.id)) return session;
                });
                return (
                  <Favs
                    sessions={formatSessionData(faves)}
                    nav={id => this.sessionNav(id)}
                    favesIds={favesArr}
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
