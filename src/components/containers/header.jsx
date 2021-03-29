import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  Link,
} from "react-router-dom";
import {
  AuthorizationStatus,
  AppRoute,
  StoreNameSpace,
} from "../../const";
import {
  logout
} from "../../store/api-actions";

const Header = () => {
  const {
    authorizationStatus,
    userEmail,
    userAvatar,
  } = useSelector((state) => state[StoreNameSpace.USER]);

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const dispatch = useDispatch();

  const handleLogoutClick = (evt) => {
    evt.preventDefault();

    dispatch(logout());
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
            <ul className="header__nav-list" style={{
              flexDirection: `column`,
              alignItems: `flex-end`,
            }}>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}>
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

export default Header;
