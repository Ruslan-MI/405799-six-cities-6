import React from "react";
import PropTypes from "prop-types";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  changeSortType,
} from "../../../../../store/actions/main-page";
import {
  StoreNameSpace,
} from "../../../../../const";

const PlacesOption = ({
  sortType,
  onClick,
}) => {
  const {
    currentSortType,
  } = useSelector((state) => state[StoreNameSpace.MAIN_PAGE]);

  const isCurrentSortType = currentSortType === sortType;

  const dispatch = useDispatch();

  const handlePlacesOptionClick = () => {
    if (!isCurrentSortType) {
      dispatch(changeSortType(sortType));
    }

    onClick();
  };

  return (
    <li className={`places__option ${isCurrentSortType ? `places__option--active` : ``}`} tabIndex="0"
      onClick={handlePlacesOptionClick}>{sortType}</li>
  );
};

PlacesOption.propTypes = {
  sortType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlacesOption;
