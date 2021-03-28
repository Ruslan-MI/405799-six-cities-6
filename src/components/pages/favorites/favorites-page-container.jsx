import React, {
  useEffect,
} from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import FavoritesPage from "./favorites-page";
import {
  fetchFavoriteOffers,
} from "../../../store/api-actions";

const FavoritesPageContainer = ({
  isFavoriteOffersLoaded,
  onLoadData,
}) => {
  useEffect(() => {
    onLoadData();
  }, []);

  return <FavoritesPage isDataLoaded={isFavoriteOffersLoaded} />;
};

FavoritesPageContainer.propTypes = {
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  DATA,
}) => ({
  isFavoriteOffersLoaded: DATA.isFavoriteOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteOffers());
  },
});

export {
  FavoritesPageContainer,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPageContainer);
