import React, {
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import FavoritesPage from "./favorites-page";
import {
  fetchFavoriteOffers,
} from "../../../store/api-actions";

const FavoritesPageContainer = () => {
  const {
    isFavoriteOffersLoaded,
  } = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, []);

  return <FavoritesPage isDataLoaded={isFavoriteOffersLoaded} />;
};

export default FavoritesPageContainer;
