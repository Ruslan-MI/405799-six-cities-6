import React from "react";
import PropTypes from "prop-types";
import {
  appendIDForArrayItems,
} from "../../../utils/common";

const PropertyInside = ({
  goods,
}) => (
  <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {appendIDForArrayItems(goods).map(({
        item,
        id,
      }) => <li className="property__inside-item" key={id}>{item}</li>)}
    </ul>
  </div>
);

PropertyInside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyInside;
