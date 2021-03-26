import React from "react";
import {
  connect,
} from "react-redux";
import FavoritesLocationsItems from "./favorites-locations-items";
import {
  getFavoriteCities,
} from "../../../utils/common";
import {
  placeCards as offersPropTypes,
} from "../../../prop-types/offers-validation";

const FavoritesList = ({
  favoriteOffers,
}) => {
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {getFavoriteCities(favoriteOffers).map((city, i) => <FavoritesLocationsItems key={i} city={city} favoriteOffers={favoriteOffers} />)}
      </ul>
    </>
  );
};

FavoritesList.propTypes = {
  favoriteOffers: offersPropTypes,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
});

export {
  FavoritesList,
};

export default connect(mapStateToProps)(FavoritesList);
