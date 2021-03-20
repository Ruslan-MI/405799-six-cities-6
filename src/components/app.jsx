import React from "react";
import {
  Router as BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import {
  connect
} from "react-redux";
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
  AppRoute
} from "../const";

const App = ({
  offers
}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN} component={LoginPage} />
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesPage />} />
        <Route exact path={`${AppRoute.OFFER}/:id`} render={({
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
  offers: offersPropTypes
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {
  App
};

export default connect(mapStateToProps)(App);
