import React from "react";
import PropTypes from "prop-types";

const PropertyDescription = ({
  description,
}) => {
  return (
    <div className="property__description">
      <p className="property__text">
        {description}
      </p>
    </div>
  );
};

PropertyDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default PropertyDescription;
