import React, {
  useState,
} from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import PlacesOptions from "./places-options";

const PlacesSorting = ({
  currentSortType,
}) => {
  const [
    isPlacesOptionsOpened,
    setPlacesOptionsOpened
  ] = useState(false);

  const handlePlacesOptionsClick = () => {
    setPlacesOptionsOpened(!isPlacesOptionsOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={handlePlacesOptionsClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <PlacesOptions isPlacesOptionsOpened={isPlacesOptionsOpened} onChange={handlePlacesOptionsClick} />
    </form>
  );
};

PlacesSorting.propTypes = {
  currentSortType: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  MAIN_PAGE,
}) => ({
  currentSortType: MAIN_PAGE.currentSortType,
});

export {
  PlacesSorting,
};

export default connect(mapStateToProps)(PlacesSorting);

