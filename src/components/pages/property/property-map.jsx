import React from "react";
import PropTypes from "prop-types";
import Map from "../../containers/map";

const PropertyMap = ({className = ``, ...restProps}) => {
  return <Map className={`property__map ${className}`} {...restProps} />;
};

PropertyMap.propTypes = {
  className: PropTypes.string
};

export default PropertyMap;
