import React from "react";
import SessionList from "../../components/SessionList";
import PropTypes from 'prop-types';

const Schedule = props => {
  return (
    <SessionList
      data={props.sessions}
      nav={props.nav}
      favesIds={props.favesIds}
    />
  );
};

Schedule.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array,
  nav: PropTypes.func.isRequired,
}

export default Schedule;
