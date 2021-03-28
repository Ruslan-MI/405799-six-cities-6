import React, {
  memo,
  useState,
} from "react";
import {
  useSelector,
} from "react-redux";
import PlacesOptions from "./places-options";
import {
  StoreNameSpace,
} from "../../../../../const";

const PlacesSorting = () => {
  const {
    currentSortType,
  } = useSelector((state) => state[StoreNameSpace.MAIN_PAGE]);

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

export default memo(PlacesSorting);
