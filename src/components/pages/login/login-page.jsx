import React, {
  useRef,
} from "react";
import {
  Link,
} from "react-router-dom";
import {
  useDispatch,
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

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  const handleLinkClick = () => {
    dispatch(changeCurrentCity(cityForLink));
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
              <Link className="locations__item-link" to={AppRoute.ROOT} onClick={handleLinkClick} >
                <span>{cityForLink}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
