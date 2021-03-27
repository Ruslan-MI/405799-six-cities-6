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
  isMainPage = false,
  isLoginPage = false,
  isFavoritesPage = false,
  authorizationStatus,
  userEmail,
  userAvatar,
  onLogoutClick,
}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const handleLogoutClick = (evt) => {
    evt.preventDefault();

    onLogoutClick();
  };

  const handleHeaderLogoLinkClick = (evt) => {
    if (isMainPage) {
      evt.preventDefault();
    }
  };

  const handleHeaderNavLinkProfileClick = (evt) => {
    if (isLoginPage || isFavoritesPage) {
      evt.preventDefault();
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.ROOT} onClick={handleHeaderLogoLinkClick}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list" style={{
              flexDirection: `column`,
              alignItems: `flex-end`,
            }}>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}
                  onClick={handleHeaderNavLinkProfileClick}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {isAuthorized && <img className="user__avatar" src={userAvatar} width="74" height="74" alt="User avatar" />}
                  </div>
                  <span className={isAuthorized ? `header__user-name user__name` : `header__login`}>{isAuthorized ? userEmail : `Sign in`}</span>
                </Link>
              </li>
              {isAuthorized && (
                <li className="header__nav-item user">
                  <Link className="header__nav-link" to="#" onClick={handleLogoutClick}>
                    <span>Logout</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMainPage: PropTypes.bool,
  isLoginPage: PropTypes.bool,
  isFavoritesPage: PropTypes.bool,
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
  userAvatar: state.userAvatar,
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
