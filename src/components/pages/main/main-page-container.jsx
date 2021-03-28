import React, {
  useEffect,
} from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import MainPage from "./main-page";
import {
  fetchOffers,
} from "../../../store/api-actions";

const MainPageContainer = ({
  isOffersLoaded,
  onLoadData,
}) => {
  useEffect(() => {
    onLoadData();
  }, []);

  return <MainPage isDataLoaded={isOffersLoaded} />;
};

MainPageContainer.propTypes = {
  isOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  DATA,
}) => ({
  isOffersLoaded: DATA.isOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {
  MainPageContainer,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
