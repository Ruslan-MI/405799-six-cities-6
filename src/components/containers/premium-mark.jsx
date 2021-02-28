import React from "react";
import PropTypes from "prop-types";

const PremiumMark = ({
  isPropertyPage = false
}) => {
  return (
    <div className={isPropertyPage ? `property__mark` : `place-card__mark`}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.propTypes = {
  isPropertyPage: PropTypes.bool
};

export default PremiumMark;
