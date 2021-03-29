import React from "react";
import {
  Router as BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import FavoritesPageContaiter from "./pages/favorites/favorites-page-container";
import LoginPage from "./pages/login/login-page";
import MainPageContainer from "./pages/main/main-page-container";
import NotFoundPage from "./pages/not-found/not-found-page";
import PropertyPageContainer from "./pages/property/property-page-container";
import PrivateRoute from "./containers/private-route";
import browserHistory from "../utils/browser-history";
import {
  AppRoute,
} from "../const";

const App = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPageContainer />
      </Route>
      <PrivateRoute exact path={AppRoute.LOGIN} render={() => <LoginPage />} />
      <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesPageContaiter />} />
      <Route exact path={`${AppRoute.OFFER}/:id`} render={({
        match: {
          params: {
            id
          }
        }
      }) =>
        <PropertyPageContainer offerID={Number(id)} />
      } />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
