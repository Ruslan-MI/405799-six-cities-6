import React from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import {
  Link,
} from "react-router-dom";
import {
  AuthorizationStatus,
  AppRoute,
} from "../../const";
import {
  logout
} from "../../store/api-actions";

const Header = ({
  authorizationStatus,
  userEmail,
  onLogoutClick,
}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const handleLogoutClick = (evt) => {
    evt.preventDefault();

    onLogoutClick();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.ROOT}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className={isAuthorized ? `header__user-name user__name` : `header__login`}>{isAuthorized ? userEmail : `Sign in`}</span>
                </Link>
                {isAuthorized && <Link className="header__nav-link header__nav-link--profile" to={AppRoute.ROOT} onClick={handleLogoutClick}>
                  <span className="header__login" style={{
                    marginLeft: `auto`,
                    padding: `10px 0 0`
                  }}>Logout</span>
                </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout());
  },
});

export {
  Header,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
