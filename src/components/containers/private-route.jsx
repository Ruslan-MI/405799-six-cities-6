import React from "react";
import PropTypes from "prop-types";
import {
  Route,
  Redirect,
} from "react-router-dom";
import {
  useSelector,
} from "react-redux";
import {
  AuthorizationStatus,
  AppRoute,
} from "../../const";


const PrivateRoute = ({
  render,
  path,
  exact,
}) => {
  const {
    authorizationStatus,
  } = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (path === AppRoute.LOGIN) {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? <Redirect to={AppRoute.ROOT} />
              : render(routeProps)
          );
        }
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? <Redirect to={AppRoute.LOGIN} />
            : render(routeProps)
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
