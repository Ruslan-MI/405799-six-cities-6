import React, {
  useRef,
} from "react";
import {
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import {
  login,
} from "../../../store/api-actions";
import Header from "../../containers/header";
import {
  changeCurrentCity,
} from "../../../store/actions/main-page";
import {
  CITIES,
  AppRoute,
} from "../../../const";

const cityForLink = CITIES[3];

const LoginPage = ({
  onSubmit,
  onClick,
}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header isLoginPage />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email"
                  required ref={emailRef} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password"
                  required ref={passwordRef} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT} onClick={onClick} >
                <span>{cityForLink}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  onClick() {
    dispatch(changeCurrentCity(cityForLink));
  },
});

export {
  LoginPage,
};

export default connect(null, mapDispatchToProps)(LoginPage);
