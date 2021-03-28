import React, {
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import MainPage from "./main-page";
import {
  fetchOffers,
} from "../../../store/api-actions";
import {
  StoreNameSpace,
} from "../../../const";

const MainPageContainer = () => {
  const {
    isOffersLoaded,
  } = useSelector((state) => state[StoreNameSpace.DATA]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return <MainPage isDataLoaded={isOffersLoaded} />;
};

export default MainPageContainer;
