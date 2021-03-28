import React, {
  memo,
} from "react";
import {
  useSelector,
} from "react-redux";
import FavoritesLocationsItems from "./favorites-locations-items";
import {
  getFavoriteCities,
} from "../../../utils/common";
import {
  StoreNameSpace,
} from "../../../const";

const FavoritesList = () => {
  const {
    favoriteOffers,
  } = useSelector((state) => state[StoreNameSpace.DATA]);

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {getFavoriteCities(favoriteOffers).map((city, i) => <FavoritesLocationsItems key={i} city={city} favoriteOffers={favoriteOffers} />)}
      </ul>
    </>
  );
};

export default memo(FavoritesList);
