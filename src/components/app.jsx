import React, {
  useEffect
} from "react";
import PropTypes from "prop-types";
import {
  Router as BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import {
  connect
} from "react-redux";
import LoadingScreen from "./containers/loading-screen";
import FavoritesPage from "./pages/favorites/favorites-page";
import LoginPage from "./pages/login/login-page";
import MainPage from "./pages/main/main-page";
import NotFoundPage from "./pages/not-found/not-found-page";
import PropertyPage from "./pages/property/property-page";
import PrivateRoute from "./containers/private-route";
import browserHistory from "../utils/browser-history";
import {
  getOfferForID
} from "../utils/common";
import {
  propertyPages as offersPropTypes
} from "../prop-types/offers-validation";
import {
  fetchOffers
} from "../store/api-actions";

const App = ({
  offers,
  isDataLoaded,
  onLoadData
}) => {
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/favorites" render={() => <FavoritesPage />} />
        <Route exact path="/offer/:id" render={({
          match: {
            params: {
              id
            }
          }
        }) =>
          <PropertyPage offer={getOfferForID(offers, id)} />
        } />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: offersPropTypes,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {
  App
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
