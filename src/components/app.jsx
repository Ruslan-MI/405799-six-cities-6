import React from "react";
import {
  Router as BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import FavoritesPage from "./pages/favorites/favorites-page";
import LoginPage from "./pages/login/login-page";
import MainPage from "./pages/main/main-page";
import NotFoundPage from "./pages/not-found/not-found-page";
import PropertyPage from "./pages/property/property-page";
import PrivateRoute from "./containers/private-route";
import browserHistory from "../utils/browser-history";
import {
  AppRoute
} from "../const";

const App = () => {
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
          <PropertyPage offerID={Number(id)} />
        } />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
