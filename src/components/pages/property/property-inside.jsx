import React from "react";
import PropTypes from "prop-types";

const PropertyInside = ({
  goods
}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((item, i) => <li className="property__inside-item" key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

PropertyInside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyInside;
