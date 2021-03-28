import React, {
  memo,
} from "react";
import PropTypes from "prop-types";

const PropertyGallery = ({
  images,
}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => <div className="property__image-wrapper" key={i}>
          <img className="property__image" src={image} alt="Photo studio" />
        </div>)}
      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(PropertyGallery);
