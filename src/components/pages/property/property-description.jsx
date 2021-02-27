import React from "react";
import PropTypes from "prop-types";

const PropertyDescription = ({
  description
}) => {
  return (
    <div className="property__description">
      <p className="property__text">
        {description}
      </p>
      {/* Разбивать предложения на абзацы?*/}
      {/* <p className="property__text">
        An independent House, strategically located between Rembrand Square and National Opera, but where the
        bustle of the city comes to rest in this alley flowery and colorful.
      </p> */}
    </div>
  );
};

PropertyDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default PropertyDescription;
