import React from "react";
import PropTypes from "prop-types";
import {
  appendIDForArrayItems,
} from "../../../utils/common";

const PropertyGallery = ({
  images,
}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {appendIDForArrayItems(images).map(({
        item,
        id,
      }) => (
        <div className="property__image-wrapper" key={id}>
          <img className="property__image" src={item} alt="Photo studio" />
        </div>
      ))}
    </div>
  </div>
);

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyGallery;
