import React from "react";
import PropTypes from "prop-types";
import Page from "./page";

const App = ({
  placeCardCount
}) => {
  return (<Page placeCardCount={placeCardCount} />);
};

App.propTypes = {
  placeCardCount: PropTypes.number.isRequired
};

export default App;
