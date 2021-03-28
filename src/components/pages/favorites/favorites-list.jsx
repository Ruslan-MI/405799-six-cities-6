import React from "react";
import {
  useSelector,
} from "react-redux";
import FavoritesLocationsItems from "./favorites-locations-items";
import {
  getFavoriteCities,
} from "../../../utils/common";

const FavoritesList = () => {
  const {
    favoriteOffers,
  } = useSelector((state) => state.DATA);

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {getFavoriteCities(favoriteOffers).map((city, i) => <FavoritesLocationsItems key={i} city={city} favoriteOffers={favoriteOffers} />)}
      </ul>
    </>
  );
};

export default FavoritesList;
