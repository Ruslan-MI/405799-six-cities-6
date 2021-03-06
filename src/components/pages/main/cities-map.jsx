import React from "react";
import PropTypes from "prop-types";
import Map from "../../containers/map";

const CitiesMap = ({className = ``, ...restProps}) => {
  return <Map className={`cities__map ${className}`} {...restProps} />;
};

CitiesMap.propTypes = {
  className: PropTypes.string
};

export default CitiesMap;
