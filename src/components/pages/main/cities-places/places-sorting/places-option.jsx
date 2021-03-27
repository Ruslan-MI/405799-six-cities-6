import React from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import {
  changeSortType,
} from "../../../../../store/actions/main-page";

const PlacesOption = ({
  sortType,
  currentSortType,
  onClick,
  onChange,
}) => {
  const isCurrentSortType = currentSortType === sortType;

  const handlePlacesOptionClick = () => {
    if (!isCurrentSortType) {
      onClick(sortType);
    }

    onChange();
  };

  return (
    <li className={`places__option ${isCurrentSortType ? `places__option--active` : ``}`} tabIndex="0"
      onClick={handlePlacesOptionClick}>{sortType}</li>
  );
};

PlacesOption.propTypes = {
  sortType: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(sortType) {
    dispatch(changeSortType(sortType));
  },
});

export {
  PlacesOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesOption);
